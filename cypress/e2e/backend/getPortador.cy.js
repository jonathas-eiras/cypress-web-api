describe("Listar Portador", () => {

    it("Sucesso", () => {
        const idPortador = 2001
        
        cy.api_getPortador(idPortador)
        .then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(idPortador)
        })
    })
})