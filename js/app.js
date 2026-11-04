
'use strict';

// ==========================================
// 1. TEMA CLARO E ESCURO
// ==========================================

let graficoVidalink = null;

(function inicializarTema() {
    const CHAVE_TEMA = 'tema-preferido';
    const raiz = document.documentElement;
    const botaoTema = document.getElementById('botao-tema');

    // Recupera o tema salvo no navegador.
    function lerTemaSalvo() {
        try {
            const tema = localStorage.getItem(CHAVE_TEMA);

            return tema === 'light' || tema === 'dark'
                ? tema
                : null;
        } catch (erro) {
            return null;
        }
    }

    // Salva a preferência do usuário.
    function salvarTema(tema) {
        try {
            localStorage.setItem(CHAVE_TEMA, tema);
        } catch (erro) {
            // O site continua funcionando sem armazenamento.
        }
    }

    // Identifica a preferência de tema do sistema.
    function temaDoSistema() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }

    // Aplica o tema escolhido.
    function aplicarTema(tema) {
        const temaValido = tema === 'dark' ? 'dark' : 'light';

        raiz.setAttribute('data-bs-theme', temaValido);

        if (botaoTema) {
            const temaEscuroAtivo = temaValido === 'dark';

            botaoTema.textContent = temaEscuroAtivo
                ? 'Tema escuro'
                : 'Tema claro';

            botaoTema.setAttribute(
                'aria-pressed',
                String(temaEscuroAtivo)
            );

            botaoTema.setAttribute(
                'aria-label',
                temaEscuroAtivo
                    ? 'Alternar para tema claro'
                    : 'Alternar para tema escuro'
            );
        }

        atualizarCoresGrafico();
    }

    // Atualiza as cores do gráfico conforme o tema.
    function atualizarCoresGrafico() {
        if (!graficoVidalink) return;

        const estilos = getComputedStyle(raiz);

        const corTexto = estilos
            .getPropertyValue('--cor-texto')
            .trim();

        const corGrade = estilos
            .getPropertyValue('--cor-grafico-grade')
            .trim();

        graficoVidalink.options.scales.x.ticks.color = corTexto;
        graficoVidalink.options.scales.x.title.color = corTexto;
        graficoVidalink.options.scales.x.grid.color = corGrade;
        graficoVidalink.options.scales.y.ticks.color = corTexto;

        graficoVidalink.update('none');
    }

    // Alterna entre os temas.
    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            const temaAtual = raiz.getAttribute('data-bs-theme');
            const novoTema = temaAtual === 'dark' ? 'light' : 'dark';

            aplicarTema(novoTema);
            salvarTema(novoTema);
        });
    }

    // Aplica o tema salvo ou o tema do sistema.
    aplicarTema(lerTemaSalvo() || temaDoSistema());

    // Disponibiliza a atualização para o gráfico.
    window.atualizarCoresGrafico = atualizarCoresGrafico;
})();


// ==========================================
// 2. TESTE DE AUTOPERCEPÇÃO
// ==========================================

(function inicializarTeste() {
    const formulario = document.getElementById('form-teste');
    const resultado = document.getElementById('resultado-teste');

    if (!formulario || !resultado) return;

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        // Limpa qualquer resultado anterior.
        resultado.replaceChildren();

        const campoQ1 = formulario.querySelector('#q1');
        const campoQ2 = formulario.querySelector('#q2');

        // Verifica se os campos existem e foram preenchidos.
        if (!campoQ1 || !campoQ2 ||
            campoQ1.value === '' || campoQ2.value === '') {

            resultado.textContent =
                'Responda às duas perguntas para visualizar o resultado.';

            return;
        }

        const resposta1 = Number(campoQ1.value);
        const resposta2 = Number(campoQ2.value);

        // Confere se as respostas estão dentro das opções permitidas.
        const respostasValidas = [resposta1, resposta2].every((valor) =>
            Number.isFinite(valor) && [0, 5, 10].includes(valor)
        );

        if (!respostasValidas) {
            resultado.textContent =
                'Não foi possível validar as respostas. Confira as opções e tente novamente.';

            return;
        }

        // Calcula a pontuação total.
        const pontuacao = resposta1 + resposta2;

        let feedback;

        if (pontuacao <= 5) {
            feedback =
                'Nas situações avaliadas, suas respostas indicam poucos sinais de sobrecarga. Continue observando seus limites.';
        } else if (pontuacao <= 15) {
            feedback =
                'Suas respostas indicam alguns pontos de atenção. Reflita sobre sua rotina, suas pausas e seus limites.';
        } else {
            feedback =
                'Suas respostas indicam maior frequência das situações apresentadas. Considere conversar com alguém de confiança ou buscar orientação adequada.';
        }

        // Cria os elementos que exibem o resultado.
        const linhaPontuacao = document.createElement('p');

        linhaPontuacao.className = 'fw-bold mb-2';
        linhaPontuacao.textContent =
            `Pontuação das respostas: ${pontuacao}/20`;

        const linhaFeedback = document.createElement('p');

        linhaFeedback.className = 'mb-0';
        linhaFeedback.textContent = feedback;

        resultado.replaceChildren(linhaPontuacao, linhaFeedback);
    });
})();


// ==========================================
// 3. GRÁFICO DE DADOS COM CHART.JS
// ==========================================

(function inicializarGrafico() {
    const canvas = document.getElementById('graficoVidalink');

    if (!canvas) return;

    // Verifica se a biblioteca Chart.js foi carregada.
    if (typeof Chart === 'undefined') {
        console.error(
            'Chart.js não foi carregado. Confira a conexão e a URL da biblioteca.'
        );

        return;
    }

    const raiz = document.documentElement;
    const estilos = getComputedStyle(raiz);

    const corTexto = estilos
        .getPropertyValue('--cor-texto')
        .trim();

    const corGrade = estilos
        .getPropertyValue('--cor-grafico-grade')
        .trim();

    // Dados da pesquisa Vidalink.
    const dadosVidalink = {
        labels: [
            'Geração Z',
            'Millennials',
            'Geração X',
            'Baby Boomers'
        ],

        valores: [78, 68, 66, 43]
    };

    // Criação do gráfico.
    graficoVidalink = new Chart(canvas, {
        type: 'bar',

        data: {
            labels: dadosVidalink.labels,

            datasets: [{
                label: 'Participantes com sentimentos negativos frequentes',

                data: dadosVidalink.valores,

                backgroundColor: [
                    '#2457c5',
                    '#547ac4',
                    '#7797d1',
                    '#9eb5df'
                ],

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
                        label: (context) =>
                            `${context.parsed.x}% dos participantes`
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

    // Atualiza as cores depois que o gráfico é criado.
    if (typeof window.atualizarCoresGrafico === 'function') {
        window.atualizarCoresGrafico();
    }
})();
