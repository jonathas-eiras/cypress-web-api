import dependente from "../../fixtures/dependente.json"
import { faker } from '@faker-js/faker'


describe("Cadastrar Dependente", () => {


    it("Sucesso", () => {
        dependente.nome = faker.person.fullName()
        dependente.nomeMae = faker.person.fullName()
        dependente.cpf = faker.string.numeric(11)
        dependente.dataNascimento = faker.date.birthdate()
        dependente.sexo = faker.person.sex()
    
        const idPortador = 1
        
        cy.api_postDependente(idPortador, dependente)
        .then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.cpf).to.equal(dependente.cpf)
        })
    })
})