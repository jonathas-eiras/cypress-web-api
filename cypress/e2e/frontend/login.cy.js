describe('Login', () => {
    it('Successfully', () => {
        const user = Cypress.env('user_name')
        const password = Cypress.env('user_password')
        const options = { cacheSession: false }

        cy.login(user, password, options)

        cy.get('.page-title').should('be.visible')
    })
})