// js/app.js
// Alternância entre tema claro e escuro usando o data-bs-theme do Bootstrap 5.3

(function () {
  'use strict';

  const CHAVE_TEMA = 'tema-preferido';
  const raiz = document.documentElement; // elemento <html>
  const botao = document.getElementById('botao-tema');

  // Lê o tema salvo; retorna null se não houver ou se o localStorage falhar
  function lerTemaSalvo() {
    try {
      const valor = localStorage.getItem(CHAVE_TEMA);
      return valor === 'light' || valor === 'dark' ? valor : null;
    } catch (erro) {
      return null;
    }
  }

  // Salva o tema; se o navegador bloquear o armazenamento, apenas ignora
  function salvarTema(tema) {
    try {
      localStorage.setItem(CHAVE_TEMA, tema);
    } catch (erro) {
      // sem persistência: o tema vale só para esta visita
    }
  }

  // Tema preferido do sistema operacional
  function temaDoSistema() {
    const escuro =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return escuro ? 'dark' : 'light';
  }

  // Aplica o tema no <html> e sincroniza o estado do botão
  function aplicarTema(tema) {
    raiz.setAttribute('data-bs-theme', tema);
    if (botao) {
      botao.setAttribute('aria-pressed', String(tema === 'dark'));
    }
  }

  // Alterna entre os dois temas e guarda a escolha
  function alternarTema() {
    const atual = raiz.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
    const novo = atual === 'dark' ? 'light' : 'dark';
    aplicarTema(novo);
    salvarTema(novo);
  }

  // Inicialização: tema salvo > preferência do sistema
  aplicarTema(lerTemaSalvo() || temaDoSistema());

  if (botao) {
    // Rótulo fixo em português; o estado muda via aria-pressed
    botao.setAttribute('aria-label', 'Tema escuro');
    botao.addEventListener('click', alternarTema);
  }
})();


// --- RECURSO AVANÇADO 1: TESTE DE AUTOPERCEPÇÃO ---

const formTeste = document.getElementById('form-teste');
const resultadoTeste = document.getElementById('resultado-teste');

if (formTeste && resultadoTeste) {

    // Permite que leitores de tela anunciem o resultado
    resultadoTeste.setAttribute('aria-live', 'polite');

    formTeste.addEventListener('submit', (e) => {
        e.preventDefault();

        // Captura os campos do formulário
        const campoQ1 = formTeste.querySelector('#q1');
        const campoQ2 = formTeste.querySelector('#q2');

        // Verifica se os campos existem e foram preenchidos
        if (!campoQ1 || !campoQ2 ||
            campoQ1.value === '' || campoQ2.value === '') {

            resultadoTeste.textContent = 'Por favor, responda às duas perguntas.';
            return;
        }

        // Converte as respostas para números
        const resposta1 = Number(campoQ1.value);
        const resposta2 = Number(campoQ2.value);

        // Verifica se os valores são válidos
        if (!Number.isFinite(resposta1) ||
            !Number.isFinite(resposta2)) {

            resultadoTeste.textContent = 'Respostas inválidas. Tente novamente.';
            return;
        }

        // Calcula a pontuação total
        const score = resposta1 + resposta2;

        // Define o feedback de acordo com a pontuação
        let feedback = '';

        if (score <= 5) {

            feedback = 'Suas respostas indicam poucos sinais de sobrecarga nas situações avaliadas. Continue observando seus limites.';

        } else if (score <= 15) {

            feedback = 'Atenção: suas respostas indicam alguns pontos de sobrecarga que merecem reflexão.';

        } else {

            feedback = 'Suas respostas indicam maior frequência de situações de sobrecarga. Vale refletir sobre seus limites e buscar apoio, se necessário.';

        }

        // Cria os elementos do resultado
        const pontuacao = document.createElement('p');
        pontuacao.className = 'mb-2';
        pontuacao.textContent = `Sua pontuação: ${score}/20`;

        const mensagem = document.createElement('p');
        mensagem.className = 'text-primary mb-2';
        mensagem.textContent = feedback;

        const observacao = document.createElement('small');
        observacao.className = 'd-block mt-2 text-body-secondary fw-normal';
        observacao.textContent =
            'Este questionário é uma ferramenta de reflexão, não um diagnóstico psicológico.';

        // Exibe o resultado na página
        resultadoTeste.replaceChildren(
            pontuacao,
            mensagem,
            observacao
        );

    });

}


// --- RECURSO AVANÇADO 2: GRÁFICO CHART.JS ---

const canvasVidalink = document.getElementById('graficoVidalink');

// Verifica se o elemento e a biblioteca Chart.js existem
if (canvasVidalink && typeof Chart !== 'undefined') {

    new Chart(canvasVidalink, {

        // Define o tipo de gráfico
        type: 'bar',

        // Dados da pesquisa Vidalink 2025
        data: {
            labels: [
                'Geração Z',
                'Millennials',
                'Geração X',
                'Baby Boomers'
            ],

            datasets: [{
                label: 'Insatisfação com o próprio bem-estar (%)',

                data: [30, 25, 17, 6],

                backgroundColor: [
                    '#0d6efd',
                    '#6c757d',
                    '#198754',
                    '#ffc107'
                ],

                borderRadius: 6,
                borderWidth: 0
            }]
        },

        // Configurações visuais e interativas
        options: {
            responsive: true,

            indexAxis: 'y',

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.x + '% dos participantes';
                        }
                    }
                }
            },

            scales: {
                x: {
                    beginAtZero: true,
                    max: 35,

                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },

                    title: {
                        display: true,
                        text: 'Percentual de profissionais'
                    }
                },

                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

} else if (canvasVidalink) {

    console.error('Erro: biblioteca Chart.js não foi carregada.');

}
