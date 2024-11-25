# cypress-web-api

# Projeto de Testes Automatizados Web e Apis, com Cypress

Repositório contendo testes automatizados, que foram implementados com uso do de boas práticas do Cypress.

## Estrutura do Projeto

A estrutura do projeto está organizada conforme abaixo:

![Screenshot 2024-11-24 at 22 39 29](https://github.com/user-attachments/assets/d1cf6489-f930-4ef3-9fea-2100aec7cc91)

- cypress/e2e - Pasta com os cenários de testes, Web e APIs.
- cypress/fixtures - Contém dados utilizados no teste.
- cypress/support - Contém os arquivos de Comandos do Cypress.
- docs - documentos referentes a atividades específicas do desafio.


## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior
- [Cypress](https://www.cypress.io/) versão [versão desejada]


## Execução dos testes - Local

#### OBS: Necessário executar inicialmente o comando `npm install`, para criar a pasta node_modules com as dependências do projeto.

1. Modo Interativo
   * `npx cypress open`

2. Modo Headless (linha de comando)
  * `npx cypress run`


## Execução dos testes e Reports - Github Actions

- Acessar a aba actions

- Escolher a opção Cypress-tests e clicar em Run workflow - Run workflow


### Relatórios

- Clicar na última execução

- Rolar a página até a seção Artifacts e baixar os relatórios.

  <img width="1420" alt="Screenshot 2024-11-04 at 12 47 19" src="https://github.com/user-attachments/assets/0b3caf94-5eee-428e-be94-25044634c307">

- Abrir o arquivo index.html em um navegador.
