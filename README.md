# Boas vindas ao repositório do projeto de exemplo para o Team Meeting!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Tenha atenção a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:betrybe/sd-0x-projet-team-meeting.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `sd-0x-projet-team-meeting`

2. Instale as dependências
  * `npm install`
  
3. Execute os testes localmente
  * `npm test`

4. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-project-team-meeting`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-project-team-meeting`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/betrybe/sd-0x-projet-team-meeting/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/betrybe/sd-0x-projet-team-meeting/pulls) e confira que o seu _Pull Request_ está criado

---

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório. Este Pull Request deverá conter os arquivos que conterão seu código.

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

### Data de Entrega

O projeto tem até a seguinte data: `DD/MM/YYYY - 14:00h`. Para ser entregue a avaliação final.


## Requisitos do projeto

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

## Requisitos Obrigatórios:

* Você vai implementar algumas funções matemáticas

Suponha que um requisito tenha o seguinte texto:

"Implemente a função `blabla` no arquivo `src/vish.js` que receba dois parâmetros e retorne o valor do primeiro parâmetro recebido"

Então você deve localizar a função `blabla` no arquivo `src/vish.js`

`src/vish.js`
```js
const blabla = () => {};
```

e implementar a lógica para cumprir o que foi pedido no requisito.

`src/vish.js`
```js
const blabla = (a, b) => {
  return a;
};
```

### Implemente uma função que retorne o valor do primeiro elemento

Implemente a função `primeiro` no arquivo `src/primeiro.js`. Essa função deve receber dois parâmetros e deve retornar o primeiro deles.

### Implemente uma função que realize a soma de dois números inteiros

Implemente a função `soma` no arquivo `src/soma.js`. Essa função deve receber dois números inteiros como parâmetros e deve retornar o valor da soma.

### Implemente uma função que realize a subtração de dois números inteiros

Implemente a função `subtrai` no arquivo `src/subtrai.js`. Essa função deve receber dois números inteiros como parâmetros e deve retornar o valor da subtração do primeiro menos o segundo parâmetro.

### Implemente uma função que realize a divisão de dois números inteiros

Implemente a função `divide` no arquivo `src/divide.js`. Essa função deve receber dois números inteiros como parâmetros, numerador e divisor respectivamente, e deve retornar o valor da divisão.

A operação de divisão não é definida para o valor 0 (zero), neste caso a função deve retornar a mensagem "Operação inválida".

## Requisitos Bônus:

### Implemente uma função que faça a sequência de Fibonacci

referência: https://www.todamateria.com.br/sequencia-de-fibonacci/

Implemente a função `fibonacci` no arquivo `src/fibonacci.js`. Essa função deve receber um parâmetro inteiro e deve retornar o valor da sequência para aquele parâmetro.

Exemplo:

```js
fibonacci(0) deve retornar 1
fibonacci(1) deve retornar 1
fibonacci(2) deve retornar 2
fibonacci(3) deve retornar 3
fibonacci(4) deve retornar 5
fibonacci(5) deve retornar 8
...
```

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `betrybe/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).


---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
