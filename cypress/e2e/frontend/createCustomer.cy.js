import { faker } from '@faker-js/faker'

describe('Create Customer', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Successfully', () => {
        const customer = {
            name: `Customer-${faker.person.fullName()}`,
            cpf: faker.string.numeric(11),
            status: faker.datatype.boolean(),
            balance: faker.number.float({ min: 10, max: 100, multipleOf: 0.02 })
        }
        cy.createCustomer(customer)

        cy.get('[id="alertMessage"]').should('be.visible')
    })
})