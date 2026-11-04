# A Armadilha do Propósito

> Quando o sentido do trabalho vira sobrecarga: uma análise sobre propósito, hiperconectividade e bem-estar na Geração Z.

## 1. Visão Geral do Projeto

**A Armadilha do Propósito** é uma aplicação web acadêmica que investiga como a busca por significado, impacto social e realização profissional pode se transformar em uma fonte de sobrecarga para a Geração Z.

O projeto aborda o paradoxo entre encontrar propósito no trabalho e enfrentar condições profissionais que favorecem a hiperconectividade, a disponibilidade constante, a ansiedade de produtividade e a dificuldade de desconexão.

A aplicação reúne conteúdos informativos, pesquisas, visualizações de dados, debates e uma ferramenta interativa de autopercepção.

**Objetivo:** refletir sobre como preservar o significado do trabalho sem transformar o compromisso profissional em uma obrigação de disponibilidade permanente.

**Deploy:** (https://thz77x.github.io/Entrega-duplas/).

## 2. Cruzamento dos Eixos Temáticos

### Eixo A — Futuro do Trabalho

- Trabalho remoto e hiperconectividade.
- Cultura Always-On.
- Limites entre vida profissional e pessoal.
- Direito à desconexão.
- Organização das jornadas digitais.

### Eixo B — Dimensões Socioemocionais da Geração Atual

- Busca por propósito e significado profissional.
- Necessidade de reconhecimento e realização.
- Ansiedade relacionada à produtividade.
- Sobrecarga e dificuldade de estabelecer limites.
- Bem-estar e saúde mental dos jovens profissionais.

A proposta central é investigar como uma característica positiva, a busca por significado, pode ser explorada em ambientes profissionais que não respeitam os limites individuais.

## 3. Tecnologias Utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura semântica e acessibilidade |
| CSS3 | Estilização personalizada e responsividade |
| Bootstrap 5.3.8 | Grid responsivo e componentes de interface |
| JavaScript Vanilla | Funcionalidades interativas |
| Chart.js 4.6.1 | Criação de gráficos dinâmicos |
| Google Fonts (Inter) | Tipografia |

As bibliotecas externas são carregadas por CDN.

## 4. Funcionalidades da Aplicação

- **Navegação responsiva:** menu adaptável para computadores e dispositivos móveis.
- **Modo claro e escuro:** alternância de aparência da interface.
- **Persistência de tema:** armazenamento da preferência utilizando localStorage.
- **Visualização de dados:** gráfico de barras sobre sentimentos negativos por geração.
- **Teste de autopercepção:** questionário interativo sobre produtividade e limites profissionais.
- **Debates frequentes:** componente Accordion do Bootstrap.
- **Referências bibliográficas:** acesso às pesquisas e materiais utilizados.

## 5. Estrutura de Arquivos e Diretórios

```text
A-Armadilha-do-Proposito/
│
├── index.html
├── README.md
├── LICENSE
├── AUDITORIA_IA.md
├── .gitignore
│
├── css/
│   └── styles.css
│
└── js/
    └── app.js
```

## 6. Arquitetura de Software e Contratos de Dados

### 6.1. Estrutura da interface

O arquivo `index.html` organiza a aplicação em seções semânticas:

- Introdução ao tema.
- Eixos de análise.
- Debates frequentes.
- Visualização de dados.
- Teste de autopercepção.
- Referências bibliográficas.

O Bootstrap é utilizado para estruturar o grid responsivo, os cards, a navegação e o Accordion.

### 6.2. Visualização de dados — Chart.js

O gráfico utiliza a biblioteca Chart.js para apresentar os percentuais informados pelo Check-up de Bem-estar 2026 da Vidalink.

Dataset utilizado:

```javascript
{
    labels: [
        "Geração Z",
        "Millennials",
        "Geração X",
        "Baby Boomers"
    ],
    values: [78, 68, 66, 43]
}
```

O gráfico utiliza barras horizontais para facilitar a comparação entre os grupos.

**Fonte:** Vidalink — Check-up de Bem-estar 2026.

### 6.3. Teste de autopercepção

A microaplicação utiliza duas perguntas relacionadas à culpa por não produzir e à aceitação de horas extras não remuneradas.

Cada resposta possui uma pontuação numérica:

- 0 pontos.
- 5 pontos.
- 10 pontos.

A pontuação total é calculada pela soma das respostas selecionadas.

```javascript
const pontuacao = resposta1 + resposta2;
```

O resultado é apresentado dinamicamente na página por meio do elemento `resultado-teste`.

**Importante:** o questionário possui finalidade educativa e reflexiva. Não é um instrumento psicológico validado e não realiza diagnósticos de saúde mental.

### 6.4. Alternância de tema

A aplicação utiliza o atributo `data-bs-theme` do Bootstrap 5 para alternar entre os temas claro e escuro.

A preferência selecionada pelo usuário é armazenada no `localStorage`, permitindo sua recuperação em visitas posteriores.

## 7. Fontes e Referências Bibliográficas

1. **VIDALINK.** Check-up de Bem-estar 2026. Disponível em: https://vidalink.com.br/blog/check-up-de-bem-estar-2026/

2. **DELOITTE.** 2025 Gen Z and Millennial Survey. Disponível em: https://www.deloitte.com/global/en/about/press-room/deloitte-2025-gen-z-and-millennial-survey.html

3. **FIOCRUZ.** Informe II: Saúde Mental — Ciclo de Informes sobre a Situação de Saúde da Juventude Brasileira (2025). Disponível em: https://fiocruz.br/documento/2025/12/informe-ii-saude-mental-ciclo-de-informes-sobre-situacao-de-saude-da-juventude

4. **MINISTÉRIO DO TRABALHO E EMPREGO.** Jornada de trabalho. Disponível em: https://www.gov.br/trabalho-e-emprego/

5. **MARTOS, SANTOS E BARUFI (2025).** Direito à desconexão e teletrabalho. Disponível em: https://revista.tst.jus.br/rtst/article/view/136

## 8. Colaboração e Divisão de Tarefas

**Integrantes:** Arthur Saldanha e Lucas Victor.

| Integrante | Responsabilidades |
|---|---|
| Arthur Saldanha | Desenvolvimento e manutenção da estrutura HTML, conteúdo e documentação |
| Lucas Victor | Desenvolvimento e manutenção dos estilos CSS e funcionalidades JavaScript |

A participação dos integrantes será demonstrada pelo histórico de commits do GitHub, utilizando Conventional Commits.

Exemplos:

- `feat:` inclusão de funcionalidades.
- `fix:` correções de erros.
- `style:` ajustes visuais.
- `docs:` documentação.
- `refactor:` melhorias na estrutura do código.

## 9. Auditoria de Inteligência Artificial

O projeto utiliza ferramentas de Inteligência Artificial Generativa como apoio ao desenvolvimento de funcionalidades avançadas.

A utilização da IA segue uma abordagem de copilotagem crítica, na qual os códigos sugeridos são analisados, testados e revisados pelos integrantes.

O processo está documentado no arquivo `AUDITORIA_IA.md`, que apresenta:

- Prompts utilizados.
- Respostas iniciais geradas pela IA.
- Diagnósticos técnicos das possíveis falhas.
- Refatorações e intervenções realizadas.
- Justificativas das decisões técnicas.

## 10. Como Executar o Projeto

### Pré-requisitos

- Navegador atualizado.
- Visual Studio Code (recomendado).
- Extensão Live Server (opcional).

### Instalação

Clone o repositório:

```bash
git clone https://github.com/thz77x/Entrega-duplas.git
```

Entre na pasta do projeto:

```bash
cd Entrega-duplas
```

Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server do Visual Studio Code.

## 11. Publicação — GitHub Pages

**Link de acesso:** (https://thz77x.github.io/Entrega-duplas/)

## 12. Licença

Este projeto está licenciado sob a licença MIT.

Consulte o arquivo `LICENSE` para conhecer os termos de utilização, modificação e distribuição.

---

**Projeto acadêmico — Atividade Prática Avaliativa: Front-end & Copilotagem com IA**

**Docente responsável:** Prof. Diego Marques de Carvalho.

**Integrantes:** Arthur Saldanha e Lucas Victor.

**Ano:** 2026.
