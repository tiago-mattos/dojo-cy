/// <reference types="cypress" />


describe('Funcionalidade: Login - API', () => {

    it('Deve realizar logim com sucesso', () => {
        cy.request({

            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "teste@usuario.com",
                "password": "123321"
            }

        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).be.lessThan(300)

        })

    });

    it.only('Deve validar mensagem de erro quando for inserida credencias inálidas', () => {
        cy.request({

            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "teste@usuario.com",
                "password": "123322"
              
            },
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(401) 
            expect(response.body.errors[0].msg).to.equal('Credenciais inválidas')    
           

        })
    });
  
});