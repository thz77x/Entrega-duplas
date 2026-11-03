'use strict';

// Estado compartilhado do gráfico para permitir a atualização das cores ao trocar o tema.
let graficoVidalink = null;

// --- RECURSO AVANÇADO 3: TEMA CLARO/ESCURO COM PERSISTÊNCIA ---
(function inicializarTema() {
    const CHAVE_TEMA = 'tema-preferido';
    const raiz = document.documentElement;
    const botaoTema = document.getElementById('botao-tema');

    function lerTemaSalvo() {
        try {
            const tema = localStorage.getItem(CHAVE_TEMA);
            return tema === 'light' || tema === 'dark' ? tema : null;
        } catch (erro) {
            return null;
        }
    }

    function salvarTema(tema) {
        try {
            localStorage.setItem(CHAVE_TEMA, tema);
        } catch (erro) {
            // O site continua funcionando mesmo quando o armazenamento está indisponível.
        }
    }

    function temaDoSistema() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }

    function aplicarTema(tema) {
        const temaValido = tema === 'dark' ? 'dark' : 'light';
        raiz.setAttribute('data-bs-theme', temaValido);

        if (botaoTema) {
            const temaEscuroAtivo = temaValido === 'dark';
            botaoTema.textContent = temaEscuroAtivo ? 'Tema escuro' : 'Tema claro';
            botaoTema.setAttribute('aria-pressed', String(temaEscuroAtivo));
            botaoTema.setAttribute(
                'aria-label',
                temaEscuroAtivo ? 'Alternar para tema claro' : 'Alternar para tema escuro'
            );
        }

        atualizarCoresGrafico();
    }

    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            const temaAtual = raiz.getAttribute('data-bs-theme') || 'light';
            const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
            aplicarTema(novoTema);
            salvarTema(novoTema);
        });
    }

    aplicarTema(lerTemaSalvo() || temaDoSistema());

    function atualizarCoresGrafico() {
        if (!graficoVidalink) return;

        const estilos = getComputedStyle(raiz);
        const corTexto = estilos.getPropertyValue('--cor-texto').trim();
        const corGrade = estilos.getPropertyValue('--cor-grafico-grade').trim();

        graficoVidalink.options.scales.x.ticks.color = corTexto;
        graficoVidalink.options.scales.x.title.color = corTexto;
        graficoVidalink.options.scales.x.grid.color = corGrade;
        graficoVidalink.options.scales.y.ticks.color = corTexto;
        graficoVidalink.update('none');
    }

    // Disponibiliza a função apenas para a rotina local de inicialização do gráfico.
    window.atualizarCoresGrafico = atualizarCoresGrafico;
})();

// --- RECURSO AVANÇADO 1: TESTE DE AUTOPERCEPÇÃO ---
(function inicializarTeste() {
    const formulario = document.getElementById('form-teste');
    const resultado = document.getElementById('resultado-teste');

    if (!formulario || !resultado) return;

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const campoQ1 = formulario.querySelector('#q1');
        const campoQ2 = formulario.querySelector('#q2');

        if (!campoQ1 || !campoQ2 || campoQ1.value === '' || campoQ2.value === '') {
            resultado.textContent = 'Responda às duas perguntas para visualizar o resultado.';
            return;
        }

        const resposta1 = Number(campoQ1.value);
        const resposta2 = Number(campoQ2.value);
        const respostasValidas = [resposta1, resposta2].every((valor) =>
            Number.isFinite(valor) && [0, 5, 10].includes(valor)
        );

        if (!respostasValidas) {
            resultado.textContent = 'Não foi possível validar as respostas. Confira as opções e tente novamente.';
            return;
        }

        const pontuacao = resposta1 + resposta2;
        let feedback;

        if (pontuacao <= 5) {
            feedback = 'Nas situações avaliadas, suas respostas indicam poucos sinais de sobrecarga. Continue observando seus limites.';
        } else if (pontuacao <= 15) {
            feedback = 'Suas respostas indicam alguns pontos de atenção. Reflita sobre sua rotina, suas pausas e seus limites.';
        } else {
            feedback = 'Suas respostas indicam maior frequência das situações apresentadas. Considere conversar com alguém de confiança ou buscar orientação adequada.';
        }

        const linhaPontuacao = document.createElement('p');
        linhaPontuacao.className = 'fw-bold mb-2';
        linhaPontuacao.textContent = `Pontuação das respostas: ${pontuacao}/20`;

        const linhaFeedback = document.createElement('p');
        linhaFeedback.className = 'mb-0';
        linhaFeedback.textContent = feedback;

        resultado.replaceChildren(linhaPontuacao, linhaFeedback);
    });
})();

// --- RECURSO AVANÇADO 2: VISUALIZAÇÃO DE DADOS COM CHART.JS ---
(function inicializarGrafico() {
    const canvas = document.getElementById('graficoVidalink');

    if (!canvas) return;

    if (typeof Chart === 'undefined') {
        console.error('Chart.js não foi carregado. Confira a conexão e a URL da biblioteca.');
        return;
    }

    const raiz = document.documentElement;
    const estilos = getComputedStyle(raiz);
    const corTexto = estilos.getPropertyValue('--cor-texto').trim();
    const corGrade = estilos.getPropertyValue('--cor-grafico-grade').trim();

    const dadosVidalink = {
        labels: ['Geração Z', 'Millennials', 'Geração X', 'Baby Boomers'],
        valores: [78, 68, 66, 43]
    };

    graficoVidalink = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: dadosVidalink.labels,
            datasets: [{
                label: 'Participantes com sentimentos negativos frequentes',
                data: dadosVidalink.valores,
                backgroundColor: ['#2457c5', '#547ac4', '#7797d1', '#9eb5df'],
                borderRadius: 7,
                borderSkipped: false,
                maxBarThickness: 34
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 650
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.parsed.x}% dos participantes`
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    min: 0,
                    max: 85,
                    title: {
                        display: true,
                        text: 'Percentual de participantes (%)',
                        color: corTexto
                    },
                    ticks: {
                        color: corTexto,
                        callback: (valor) => `${valor}%`
                    },
                    grid: {
                        color: corGrade
                    }
                },
                y: {
                    ticks: {
                        color: corTexto
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    if (typeof window.atualizarCoresGrafico === 'function') {
        window.atualizarCoresGrafico();
    }
})();
