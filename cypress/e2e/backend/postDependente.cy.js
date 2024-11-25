import dependente from "../../fixtures/dependente.json"
import { faker } from '@faker-js/faker'


describe("Cadastrar Dependente", () => {


    it("Sucesso", () => {
        dependente.nome = faker.person.fullName()
        dependente.nomeMae = faker.person.fullName()
        dependente.dataNascimento = faker.date.birthdate()
    
        const idPortador = 2001
        
        cy.api_postDependente(idPortador, dependente)
        .then(response => {
            expect(response.status).to.equal(201)
        })
    })
})