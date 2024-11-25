
import { faker } from '@faker-js/faker'


describe("Alterar senha cartão", () => {

    const idPortador = 2001
    let idCartao = null

    beforeEach(() => {

        cy.api_getPortador(idPortador)
            .then(response => {
                idCartao = response.body.idCartao
            })

    })

    it("Sucesso", () => {
        const senhaAntiga = faker.internet.password(6)
        const senhaNova = faker.internet.password(6)

        cy.api_putSenhaCartao(idCartao, senhaAntiga, senhaNova)
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('msg')
            })
    })
})