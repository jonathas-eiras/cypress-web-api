import { faker } from '@faker-js/faker'

describe('Create Transaction', () => {

    const customer = {
        name: `Customer-${faker.person.fullName()}`,
        cpf: faker.string.numeric(11),
        status: faker.datatype.boolean(),
        balance: faker.number.float({ min: 10, max: 100, multipleOf: 0.02 })
    }
    
    beforeEach(() => {
        cy.login()
        cy.createCustomer(customer)
    })

    it('Successfully', () => {
        const transaction = {
            customer: customer.name,
            transactionValue: faker.number.float({ min: 1, max: `${customer.balance}`, multipleOf: 0.02 })
        }
        cy.createTransaction(transaction)

        cy.get('[id="alertMessage"]').should('be.visible')
    })
})