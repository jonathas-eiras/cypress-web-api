import portador from "../../fixtures/portador.json"
import { faker } from '@faker-js/faker'


describe("Alterar Portador", () => {


    it("Sucesso", () => {
        portador.nome = faker.person.fullName()
        portador.email = faker.internet.email()
        portador.cidadeNatal = faker.location.city()

        const idPortador = 2002
        
        cy.api_patchPortador(idPortador, portador)
        .then(response => {
            expect(response.status).to.equal(200)
        })
    })
})