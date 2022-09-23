/// <reference types="cypress" />

describe('Funcionalidade: Publicação via API', () => {

    let token


    beforeEach(() => {
        cy.GetToken().then((tkn) => {
            token = tkn

        })

    });
    it('POST - Deve criar uma publicação com sucesso', () => {

        let text = "Lorem ipsum"

        cy.criarPost(token, text).then((response) => {
            expect(response.status).to.equal(201)
            cy.log(response.body._id)

        })

    });
    it('GET - Deve listar uma publicação com sucesso', () => {
        cy.request({
            method: 'GET',
            url: "/api/posts",
            headers: { Cookie: token },

        }).should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body[0]).to.have.property('avatar')


        })

    });
    it('PUT - Deve alterar uma publicação com sucesso', () => {

        let text = "Lorem ipsum"


        cy.criarPost(token, text).then((response) => {
            let id = response.body._id
            cy.curtirPost(token, id).then((response)=> {expect(response.status).to.equal(200) })
            cy.log(id)

        })

    });

    it('DELETE - Deve deletar uma publicação com sucesso', () => {

        let text = "Lorem ipsum"


        cy.criarPost(token, text).then((response) => {
            let id = response.body._id
            cy.deletarPost(token, id).then((response)=> {
                expect(response.status).to.equal(200)
                expect(response.body.msg).to.equal("Post removido")
             })
            cy.log(id)

        })


    });
});