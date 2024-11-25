describe("Deletar telefone Portador", () => {

    const idPortador = 2001
    let idTelefone = null

    beforeEach(() => {
        cy.api_getTelefonePortador(idPortador)
            .then(response => {
                expect(response.status).to.equal(200)
                idTelefone = response.body[0].id
            })

    })


    it("Sucesso", () => {

        cy.api_deleteTelefonePortador(idPortador, idTelefone)
            .then(response => {
                expect(response.status).to.equal(200)
            })

    })
})