import portador from "../../fixtures/portador.json"
import { faker } from '@faker-js/faker'


describe("Alterar Portador", () => {


    it("Sucesso", () => {
        portador.nome = faker.person.fullName()

        const idPortador = 2001
        
        cy.api_patchPortador(idPortador, portador)
        .then(response => {
            expect(response.status).to.equal(200)
        })
    })
})