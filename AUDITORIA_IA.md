A Armadilha do Propósito
Quando o sentido do trabalho vira sobrecarga: uma análise sobre propósito, hiperconectividade e bem-estar na Geração Z.
1. Visão Geral do Projeto

A Armadilha do Propósito é uma aplicação web acadêmica que investiga como a busca por significado, impacto social e realização profissional pode se transformar em uma fonte de sobrecarga no ambiente de trabalho.

O projeto aborda o paradoxo entre encontrar propósito no trabalho e enfrentar condições profissionais que favorecem a hiperconectividade, a disponibilidade constante, a ansiedade relacionada à produtividade e a dificuldade de desconexão.

A aplicação reúne conteúdos informativos, pesquisas, visualizações de dados, debates e uma ferramenta interativa de autopercepção.

Objetivo: refletir sobre como preservar o significado do trabalho sem transformar o compromisso profissional em uma obrigação de disponibilidade permanente.

Deploy: (https://thz77x.github.io/Entrega-duplas/).

2. Cruzamento dos Eixos Temáticos
Eixo A — Futuro do Trabalho
Trabalho remoto e hiperconectividade;
Cultura Always-On;
Limites entre vida profissional e pessoal;
Direito à desconexão;
Organização das jornadas digitais;
Uso de ferramentas digitais no ambiente profissional.
Eixo B — Dimensões Socioemocionais da Geração Atual
Busca por propósito e significado profissional;
Necessidade de reconhecimento e realização;
Ansiedade relacionada à produtividade;
Sobrecarga e dificuldade de estabelecer limites;
Bem-estar e saúde mental dos jovens profissionais.

A proposta central é investigar como uma característica positiva, a busca por significado, pode ser explorada em ambientes profissionais que não respeitam os limites individuais.

O projeto também procura demonstrar que propósito e bem-estar precisam caminhar juntos, sem que a dedicação profissional seja utilizada como justificativa para condições inadequadas de trabalho.

3. Tecnologias Utilizadas
Tecnologia	Aplicação
HTML5	Estrutura semântica e organização do conteúdo
CSS3	Estilização personalizada e responsividade
Bootstrap 5.3.8	Grid responsivo e componentes de interface
JavaScript Vanilla	Funcionalidades e interações da aplicação
Chart.js 4.6.1	Construção do gráfico de dados
Google Fonts (Inter)	Tipografia da aplicação

As bibliotecas externas são carregadas por CDN.

4. Funcionalidades da Aplicação

A aplicação foi desenvolvida para oferecer uma experiência informativa, responsiva e interativa.

4.1. Navegação responsiva

A navegação principal permite acessar diretamente as seguintes seções:

Início;
Eixos;
Debates;
Dados;
Autopercepção;
Fontes.

O menu utiliza os componentes Navbar e Collapse do Bootstrap, adaptando-se a diferentes tamanhos de tela.

4.2. Alternância de tema

A interface possui um botão que permite alternar entre os temas claro e escuro.

A implementação utiliza o atributo data-bs-theme do Bootstrap 5 para modificar a aparência dos componentes conforme o tema selecionado.

4.3. Conteúdo informativo

A página apresenta três dimensões principais do tema:

Trabalho com significado;
Quando o compromisso vira sobrecarga;
Cultura Always-On.

Essas dimensões são organizadas em cards para facilitar a compreensão do paradoxo entre propósito profissional e bem-estar.

4.4. Debates frequentes

Foi implementado um componente Accordion do Bootstrap para apresentar respostas a três questões:

Propósito no trabalho é positivo ou pode virar uma armadilha?
Como o trabalho remoto pode intensificar a cultura Always-On?
O que ajuda a preservar o bem-estar sem abrir mão do propósito?

O componente permite expandir e recolher as respostas, facilitando a leitura do conteúdo.

4.5. Visualização de dados

A aplicação utiliza o Chart.js 4.6.1 para apresentar um gráfico de barras horizontais com dados do Check-up de Bem-estar 2026 da Vidalink.

Os percentuais apresentados são:

Geração	Percentual
Geração Z	78%
Millennials	68%
Geração X	66%
Baby Boomers	43%

Os dados representam participantes que relataram sentimentos negativos, como ansiedade, angústia ou desânimo, na maior parte dos dias.

A visualização facilita a comparação entre os grupos.

Fonte: Vidalink — Check-up de Bem-estar 2026.

4.6. Indicadores complementares

Além do gráfico principal, a aplicação apresenta dois cards informativos com pesquisas complementares:

Deloitte (2025): apresenta a importância do propósito para a satisfação e o bem-estar profissional, registrando 89% entre a Geração Z e 92% entre os Millennials.
Fiocruz (2025): apresenta dados sobre internações por transtornos mentais e comportamentais entre jovens de 15 a 29 anos, contextualizando os desafios relacionados à saúde mental.

A página também apresenta uma observação sobre os limites de interpretação dos dados, evitando estabelecer relações causais ou generalizações sobre uma geração inteira.

4.7. Teste de autopercepção

A aplicação disponibiliza um questionário interativo com duas perguntas:

Você sente culpa quando não está sendo produtivo(a)?
Você sente que o propósito do trabalho justifica fazer horas extras sem remuneração?

Cada pergunta apresenta três possibilidades de resposta, com pontuações de 0, 5 e 10 pontos.

A pontuação final é obtida pela soma das respostas selecionadas:

javascript
const pontuacao = resposta1 + resposta2;


O resultado é apresentado dinamicamente no elemento resultado-teste, utilizando aria-live="polite" para comunicar atualizações de conteúdo.

Importante: o questionário possui finalidade exclusivamente educativa e reflexiva. Não é um instrumento psicológico validado, não diagnostica Burnout e não substitui orientação profissional.

4.8. Referências bibliográficas

A seção final reúne as fontes utilizadas na construção do conteúdo, permitindo que os visitantes consultem diretamente as pesquisas, os documentos institucionais e os materiais relacionados ao tema.

Os links externos utilizam os atributos target="_blank" e rel="noopener noreferrer".

5. Estrutura de Arquivos e Diretórios
text
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

Descrição dos arquivos
Arquivo	Responsabilidade
index.html	Estrutura e conteúdo da aplicação
css/styles.css	Estilização personalizada
js/app.js	Funcionalidades e interações JavaScript
README.md	Apresentação e instruções do projeto
AUDITORIA_IA.md	Registro da utilização de Inteligência Artificial
LICENSE	Termos de licenciamento
.gitignore	Arquivos e diretórios ignorados pelo Git
6. Arquitetura de Software e Contratos de Dados
6.1. Estrutura da interface

O arquivo index.html concentra a estrutura principal da aplicação, utilizando elementos semânticos do HTML5.

A página está dividida nas seguintes seções:

Introdução ao tema;
Entendimento do paradoxo entre propósito e sobrecarga;
Debates frequentes;
Apresentação de dados e pesquisas;
Teste de autopercepção;
Referências bibliográficas.

O Bootstrap auxilia na organização do grid responsivo, dos cards, da navegação, dos formulários e dos componentes interativos.

6.2. Visualização de dados — Chart.js

O gráfico utiliza o elemento <canvas> com identificador graficoVidalink.

Os dados utilizados na visualização são:

javascript
{
    labels: [
        "Geração Z",
        "Millennials",
        "Geração X",
        "Baby Boomers"
    ],
    values: [78, 68, 66, 43]
}


A representação utiliza barras horizontais, permitindo comparar visualmente os percentuais de cada geração.

A implementação é realizada no arquivo js/app.js, utilizando a biblioteca Chart.js.

6.3. Teste de autopercepção

A ferramenta utiliza um formulário HTML com dois campos de seleção.

Os valores numéricos das alternativas são utilizados para calcular a pontuação total.

Exemplo da lógica de cálculo:

javascript
const pontuacao = resposta1 + resposta2;


Após o envio do formulário, o resultado é apresentado na própria página, sem necessidade de recarregamento.

O questionário foi desenvolvido como recurso educativo, sem finalidade diagnóstica.

6.4. Alternância de tema

A aplicação utiliza o atributo data-bs-theme para controlar a aparência da interface.

O botão identificado por botao-tema permite ao usuário alternar entre os temas disponíveis.

A lógica de interação é organizada no arquivo js/app.js.

7. Fontes e Referências Bibliográficas
VIDALINK. Check-up de Bem-estar 2026. Disponível em: https://vidalink.com.br/blog/check-up-de-bem-estar-2026/.
DELOITTE. 2025 Gen Z and Millennial Survey. Disponível em: https://www.deloitte.com/global/en/about/press-room/deloitte-2025-gen-z-and-millennial-survey.html.
FIOCRUZ. Informe II: Saúde Mental — Ciclo de Informes sobre a Situação de Saúde da Juventude Brasileira (2025). Disponível em: https://fiocruz.br/documento/2025/12/informe-ii-saude-mental-ciclo-de-informes-sobre-situacao-de-saude-da-juventude.
MINISTÉRIO DO TRABALHO E EMPREGO. O que se considera jornada normal de trabalho? Disponível em: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/perguntas-frequentes/jornada-de-trabalho/o-que-se-considera-jornada.
MARTOS, SANTOS E BARUFI (2025). Direito à desconexão e teletrabalho. Disponível em: https://revista.tst.jus.br/rtst/article/view/136.
8. Colaboração e Divisão de Tarefas

Integrantes: Arthur Saldanha e Lucas Victor.

O desenvolvimento foi realizado de forma colaborativa, com divisão de responsabilidades entre os integrantes e utilização de ferramentas de Inteligência Artificial como apoio durante o processo de construção.

Integrante	Responsabilidades
Arthur Saldanha	Participação no desenvolvimento da estrutura HTML, organização dos conteúdos e documentação
Lucas Victor	Participação no desenvolvimento dos estilos CSS, funcionalidades JavaScript e ajustes da interface

As atividades foram realizadas em conjunto, com participação de ambos nas decisões sobre a estrutura, o conteúdo e a implementação do projeto.

O histórico de commits do GitHub será utilizado como registro da evolução do desenvolvimento.

Foram adotadas as seguintes convenções de commits:

feat: inclusão de funcionalidades;
fix: correções de erros;
style: ajustes visuais;
docs: documentação;
refactor: melhorias na organização do código.
9. Auditoria de Inteligência Artificial — Copilotagem

Durante o desenvolvimento do projeto, utilizamos a Inteligência Artificial Generativa como ferramenta de copilotagem, com o objetivo de auxiliar na resolução de dúvidas técnicas, na compreensão de funcionalidades e na identificação de possíveis melhorias.

A IA foi utilizada como apoio ao nosso processo de desenvolvimento, e não como responsável pela criação autônoma da aplicação.

As decisões sobre o conteúdo, a estrutura, as tecnologias e a implementação permaneceram sob responsabilidade dos integrantes.

9.1. Prompts utilizados

Para documentar a utilização da IA, selecionamos três prompts representativos das etapas de desenvolvimento.

Prompt 1 — Estruturação e organização da aplicação

Objetivo: obter orientações sobre a organização da estrutura HTML e a utilização de elementos semânticos.

Prompt:

text
Estou desenvolvendo um projeto acadêmico sobre a armadilha do propósito no trabalho, abordando a Geração Z, a hiperconectividade e o bem-estar profissional.

Quais boas práticas de HTML5 e Bootstrap posso utilizar para organizar uma página responsiva, com navegação, seções informativas, cards e referências?


Utilização no projeto: as orientações serviram como apoio para compreender a organização da página, a divisão das seções e o uso de componentes do Bootstrap.

Prompt 2 — Funcionalidades e interatividade

Objetivo: esclarecer dúvidas sobre a implementação das funcionalidades JavaScript.

Prompt:

text
Estou desenvolvendo uma aplicação utilizando JavaScript Vanilla, Bootstrap 5 e Chart.js.

Preciso implementar um gráfico de barras horizontais com dados de diferentes gerações e um questionário de autopercepção com duas perguntas, no qual cada resposta possui uma pontuação.

Explique como organizar essas funcionalidades e como apresentar os resultados dinamicamente na página.


Utilização no projeto: a copilotagem auxiliou na compreensão da manipulação de elementos HTML com JavaScript, na organização dos dados do gráfico e na lógica de cálculo do questionário.

Prompt 3 — Revisão e melhorias

Objetivo: identificar possíveis melhorias na organização, acessibilidade e experiência de uso.

Prompt:

text
Estou revisando meu projeto acadêmico desenvolvido com HTML5, CSS3, Bootstrap e JavaScript.

Quais pontos devo verificar para melhorar a responsividade, a acessibilidade, a organização do código e a experiência do usuário?

Considere também a utilização de componentes interativos, gráficos e formulários.


Utilização no projeto: as sugestões foram utilizadas como referência para revisar a estrutura da aplicação e observar aspectos que poderiam ser aprimorados.

9.2. Participação humana e validação

A utilização da Inteligência Artificial não substituiu o trabalho dos integrantes.

Durante o desenvolvimento, ficamos responsáveis por:

Definir o tema e os objetivos da aplicação;
Selecionar as tecnologias utilizadas;
Analisar as sugestões fornecidas pela IA;
Adaptar as orientações às necessidades do projeto;
Organizar e integrar os arquivos HTML, CSS e JavaScript;
Verificar o funcionamento da aplicação;
Revisar o conteúdo e as referências bibliográficas.

As respostas da IA foram tratadas como sugestões, sendo necessário avaliar sua adequação antes de qualquer utilização.

9.3. Considerações finais sobre a copilotagem

A experiência permitiu utilizar a Inteligência Artificial como uma ferramenta complementar de aprendizagem e produtividade.

A copilotagem contribuiu para esclarecer dúvidas, compreender conceitos técnicos e explorar alternativas de implementação.

Entretanto, a construção da aplicação, as escolhas realizadas e a responsabilidade pelo resultado final permaneceram com Arthur Saldanha e Lucas Victor.

Dessa forma, a IA foi utilizada como copiloto, auxiliando o desenvolvimento sem substituir a participação humana.

10. Como Executar o Projeto
Pré-requisitos
Navegador atualizado;
Visual Studio Code (recomendado);
Extensão Live Server (opcional).
Instalação

Clone o repositório:

bash
git clone URL_DO_REPOSITORIO


Entre na pasta do projeto:

bash
cd A-Armadilha-do-Proposito


Abra o arquivo index.html diretamente no navegador ou utilize a extensão Live Server do Visual Studio Code.

Como as bibliotecas externas são carregadas por CDN, é recomendável possuir conexão com a internet durante a execução.

11. Publicação — GitHub Pages

A aplicação será disponibilizada gratuitamente utilizando o GitHub Pages.

Para realizar a publicação:

Acesse o repositório no GitHub;
Entre em Settings;
Acesse Pages;
Em Build and deployment, selecione Deploy from a branch;
Escolha a branch main e a pasta / (root);
Clique em Save.

Após a publicação, o endereço oficial será inserido nesta seção.

Link de acesso: https://thz77x.github.io/Entrega-duplas/.

12. Licença

Este projeto está licenciado sob a licença MIT.

Consulte o arquivo LICENSE para conhecer os termos de utilização, modificação e distribuição.

Projeto acadêmico — Atividade Prática Avaliativa: Front-end & Copilotagem com IA

Docente responsável: Prof. Diego Marques de Carvalho.

Integrantes: Arthur Saldanha e Lucas Victor.

Ano: 2026.