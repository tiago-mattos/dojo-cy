/// <reference types="cypress" />

describe('Funcionalidade: Criar perfil via API', () => {


    let token


    beforeEach(() => {
        cy.GetToken().then((tkn) => {
            token = tkn

        })

    });
    it.only('Deve criar perfil  com Sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: {
                Cookie: token
            },
            body: {
                "company": "AmbevTech",
                "status": "QA Júnior",
                "location": "Belo Horizonte, MG",
                "skills": "Testes de Integração, Automação de Testes, Cypress, Testes Manuais",
                "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "githubusername": "tiago-mattos"

            }
        }).then((response) => {
            expect(response.status).to.equal(200)        
            expect(response.body.company).equal('AmbevTech')
         

        })
    });
});