/// <reference types="cypress" />

describe('Funcionalidade: Realizar cadastro usuário', () => {

    it('Deve realizar cadastro com sucesso', () => {

        let email = `ambev_${Math.floor(Math.random() * 1000000000)}@dojo.com.br`


        cy.request({

            method: 'POST',
            url: 'api/users',
            body: {
                "name": "Joaquim",
                "email": email,
                "password": "123321"
            }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')


        })
    });
});