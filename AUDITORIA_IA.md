# Registro de Auditoria de IA (Prompt Logbook)

## Iteração 1: UI Avançada (Dark Mode)
**1. Engenharia de Prompt:** "Atue como desenvolvedor front-end. Crie um script JS e CSS para um botão com ID 'botao-tema' que alterne entre tema claro e escuro, garantindo que a preferência seja salva no localStorage."
**2. Resposta Bruta da IA:** A IA forneceu um código manipulando diretamente `body.classList.toggle('dark-mode')` e definindo cores estáticas diretamente no CSS.
**3. Auditoria Crítica:** O código gerado misturava a lógica de estilos fixos e causaria conflito com as variáveis nativas do nosso Design System. O uso de `classList` sem um atributo raiz dificultava a escalabilidade.
**4. Refatoração Manual:** Refatoramos para utilizar o atributo `data-bs-theme="dark"` no HTML. Ajustamos o CSS para alterar dinamicamente o valor das variáveis (`:root`), mantendo o padrão exigido.

## Iteração 2: Visualização de Dados (Chart.js)
**1. Engenharia de Prompt:** "Crie um código JS usando Chart.js para mostrar a insatisfação no trabalho por geração: Gen Z (30%), Millennials (25%), Gen X (17%) e Boomers (6%)."
**2. Resposta Bruta da IA:** A IA forneceu um script básico instanciando o gráfico direto no ID 'myChart'.
**3. Auditoria Crítica:** O código possuía falhas: 1) Não verificava se o elemento `<canvas>` existia no DOM (`if(ctx)`) antes de renderizar, o que geraria erro no console. 2) Não travava a escala do eixo Y (ex: de 0 a 50), distorcendo a gravidade visual dos 30%.
**4. Refatoração Manual:** Adicionamos uma condicional protetora (`if(ctx)`) e inserimos o objeto `options` configurando o `max: 50` no eixo Y para uma representação fiel dos dados empíricos.

## Iteração 3: Microaplicação Interativa (Teste de Autopercepção)
**1. Engenharia de Prompt:** "Crie um script em JavaScript Vanilla para um teste de autopercepção com duas perguntas. O usuário escolhe as opções e o formulário calcula a pontuação, mostrando um feedback na tela."
**2. Resposta Bruta da IA:** A IA gerou a lógica usando eventos inline no HTML (`onclick="calcular()"`).
**3. Auditoria Crítica:** O uso de eventos inline é má prática de arquitetura. Além disso, a IA não usou `e.preventDefault()`, fazendo a página recarregar ao submeter o formulário e perdendo o resultado.
**4. Refatoração Manual:** Removemos os eventos inline, implementamos um `addEventListener` escutando o 'submit' e adicionamos `e.preventDefault()` para impedir o recarregamento.