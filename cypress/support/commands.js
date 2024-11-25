// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const accessToken = `Bearer ${Cypress.env('access_token')}`

Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
) => {
    const login = () => {
        cy.visit(`${Cypress.env('baseUrl')}/login`)

        cy.get('input[name="username"]').type(user)
        cy.get('input[name="password"]').type(password, { log: false })
        cy.get('.btn').click()
    }

    const validate = () => {
        cy.visit(Cypress.env('baseUrl'))

        cy.location('pathname', { timeout: 1000 }).should('not.eq', `${Cypress.env('baseUrl')}/login`)
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if(cacheSession) {
        cy.session(user, login, options)
    } else {
        login()
    }
})

Cypress.Commands.add('createCustomer', customer => {
    const status = customer.status
    cy.visit(`${Cypress.env('baseUrl')}/incluirCliente`)
    
    cy.get('#nome').type(customer.name)
    cy.get('#cpf').type(customer.cpf)
    cy.get('#status').select(status.toString())
    cy.get('#saldoCliente').type(customer.balance)
    cy.get('#botaoSalvar').click()
})

Cypress.Commands.add('createTransaction', transaction => {
    cy.visit(`${Cypress.env('baseUrl')}/incluirVenda`)
    
    cy.get('#cliente').select(transaction.customer)
    cy.get('#valorTransacao').type(transaction.transactionValue)
    cy.get('#botaoSalvar').click()
})

Cypress.Commands.add('api_getPortador', idPortador => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiBaseUrl')}/api/v1/portadores/${idPortador}`,
        headers: {
            Authorization: accessToken,

        }
    })
})

Cypress.Commands.add('api_patchPortador', (idPortador, portador) => {
    cy.request({
        method: 'PATCH',
        url: `${Cypress.env('apiBaseUrl')}/api/v1/portadores/${idPortador}`,
        headers: {
            Authorization: accessToken,
            Accept:'application/json',
            'Content-type':'application/json',

        },
        body: portador
    })
})

Cypress.Commands.add('api_postDependente', (idPortador, dependente) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiBaseUrl')}/api/v1/portadores/${idPortador}/dependentes`,
        headers: {
            Authorization: accessToken,
        },
        body: dependente
    })
})

Cypress.Commands.add('api_getTelefonePortador', idPortador => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiBaseUrl')}/api/v1/portadores/${idPortador}/telefones`,
        headers: {
            Authorization: accessToken,
        }
    })
})

Cypress.Commands.add('api_deleteTelefonePortador', (idPortador, idTelefone)=> {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiBaseUrl')}/api/v1/portadores/${idPortador}/telefones/${idTelefone}`,
        headers: {
            Authorization: accessToken,

        }
    })
})

Cypress.Commands.add('api_putSenhaCartao', (idCartao, senhaAntiga, senhaNova) => {
    cy.request({
        method: 'PUT',
        url: `${Cypress.env('apiBaseUrl')}/api/v1/cartoes/${idCartao}/senha`,
        headers: {
            Authorization: accessToken,
            senha_antiga: senhaAntiga,
            senha_nova: senhaNova
        }
    })
})