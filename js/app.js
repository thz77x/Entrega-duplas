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