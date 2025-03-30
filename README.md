## Tecnologias usadas

<div style="display: inline_block"><br/>
<img align="center" alt="html5" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img align="center" alt="html5" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</div>

## Resumo das funções e funcionamento do código

O código define um To-Do List simples usando React com o seguinte funcionamento:

1. Estados (useState)
task: Armazena o valor do input (tarefa atual digitada).

tasks: Mantém a lista de tarefas adicionadas.

2. Função addTask
Verifica se o input não está vazio (task.trim() === "").

Adiciona a nova tarefa à lista usando setTasks([...tasks, task]), preservando as tarefas anteriores.

Limpa o campo do input com setTask("").

3. Renderização
Um campo de input para digitar a tarefa.

Um botão para adicionar a tarefa à lista.

Uma lista (ul) que exibe todas as tarefas armazenadas no estado tasks usando map(), onde cada item é um li.
