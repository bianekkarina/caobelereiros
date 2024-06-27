# Petshop Cãobelereiros

Este é um sistema simples para cadastro de um petshop, escrito em Node.js. Ele permite cadastrar, listar, editar e marcar como concluído.

## Estrutura do código

### Módulos e Variáveis

- `readline`: Módulo utilizado para ler entrada do usuário no temrinal.
- `rl`: Interface criada para ler e escrever no terminal.
- `pets`: Array que armazena os dados dos pets, onde cada pet é um objeto contendo as propriedades `nomeDoDono`, `nomeDoPet`, `raca`, `servico`, `horario` e `concluido`.

### Funções Principais 

1. `exibirMenu()`:

* Função principal que exibe o menu de opções e chama as funções correspondentes com base na escolha do usuário.

2. `cadastrarPet()`: 

* Permite cadastrar um novo pet associado ao seu dono(a), raça, tipo de serviço e horário agendado.

3. `listarHorarios()`: 

* Lista todos os pets cadastrados, exibindo detalhes como nome, raça, dono(a), serviço agendado, horário e status de conclusão.

4. `editarHorarios()`:

* Permite ao usuário editar um pet existente.

5. `marcarPresenca()`: 

* Marca a presença de um pet como concluído.

6. `sair`: 

* Encerra a execução do programa.


### Decisões de Design

* **Interface Simples**: A interface é baseada em texto, fácil de usar e entender.
* **Validação Básica**: O sistema verifica se a entrada do usuário é válida (por exemplo, se o pet está cadastrado) antes de realizar operações de edição ou marcação de presença.

## Utilização de sistema

### Requisitos 

* Node.js instalado no sistema.

### Execução

1. Clone o repositório ou copie o código para um arquivo `caobelereiros.js`.
2. No terminal, navegue até diretoŕio onde o arquivo está localizado.
3. Execute o programa com o comando:
```bash
node caobelereiros.js
```

### Intruções de uso:
* Ao iniciar o programa, você verá um menu com opções numeradas. Escolha a opção desejada digitando o número correspondente e pressionando Enter.
* Siga as intruções na tela para cadastrar pets, listar horários ou marcar presença.
* Para sair do programa, escolha a opção '5'.

## Exemplo de uso:

**Passo 1: Executar o programa**
```bash
node caobelereiros.js
```
**Passo 2: Menu principal**

Após iniciar o programa, o menu será exibido:

```node.js
Bem Vindo ao Cãobelereiros! Escolha uma opção:
1. Cadastrar Pet
2. Listar horários marcados
3. Editar horários
4. Marcar prenseça concluída
5. Sair
```
**Passo 3: Cadastrar um pet**

Escolhemos a opção '1' para cadastrar um novo pet:
```node.js
Escolha uma opção: 1

Digite o nome do dono(a) do pet: Ana
Digite o nome do pet: Rex
Digite a raça do pet: Labrador
Digite o tipo de serviço: Banho e Tosa
Digite o horário: 10:00
```
O programa confirma o cadastro: 
```node.js
Pet adicionado com sucesso!

Bem Vindo ao Cãobelereiros! Escolha uma opção:
1. Cadastrar Pet
2. Listar horários marcados
3. Editar horários
4. Marcar prenseça concluída
5. Sair
```
**Passo 4: Listar horários marcados**
```node.js
Escolha uma opção: 2

Lista de pets cadastrados:

1. Nome do pet: Rex
   Raça: Labrador
   Nome do dono(a): Ana
   Tipo de serviço: Banho e Tosa
   Horário: 10:00
   Status: pendente

Bem Vindo ao Cãobelereiros! Escolha uma opção:
1. Cadastrar Pet
2. Listar horários marcados
3. Editar horários
4. Marcar prenseça concluída
5. Sair
```

**Passo 5: Editar horários**

Vamos editar o horário do pet Rex escolhendo a opção '3':
``` node.js
Escolha uma opção: 3

Lista de pets cadastrados:
1. Nome do pet: Rex
   Raça: Labrador
   Nome do dono(a): Ana
   Tipo de serviço: Banho e Tosa
   Horário: 10:00
   Status: pendente

Digite o número do cadastro que deseja editar: 1
Digite o nome do pet: Rex
Digite o nome dono: Ana
Digite a raça: Labrador
Digite o tipo de serviço: Banho e Tosa
Digite o novo horário: 11:00

Editado com sucesso!

Bem Vindo ao Cãobelereiros! Escolha uma opção:
1. Cadastrar Pet
2. Listar horários marcados
3. Editar horários
4. Marcar prenseça concluída
5. Sair
```

**Passo 6: Marcar presença concluída**

Escolha a opção '4' para marcar o serviço como concluído para o pet Rex:

``` node.js
Escolha uma opção: 4

Lista de pets cadastrados:
1. Rex

Digite o número do pet que você deseja marcar presença: 1

Presença registrada com sucesso!

Bem Vindo ao Cãobelereiros! Escolha uma opção:
1. Cadastrar Pet
2. Listar horários marcados
3. Editar horários
4. Marcar prenseça concluída
5. Sair
```
**Passo 7: Sair do programa**

Finalmente, escolha a opção '5' para encerrar o programa:

``` node.js
Escolha uma opção: 5
Até mais, aumigo! :)
```
