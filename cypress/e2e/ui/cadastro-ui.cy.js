/// <reference types="cypress" />

var faker = require('faker-br')

describe('Funcionalidade: Cadastro do Conexão QA', () => {

    beforeEach(() => {
        // Executar algo antes de cada os cenários
        cy.viewport(1366, 768)
        cy.visit('cadastrar')
        //cy.screenshot()

    });



    it('Deve efetuar cadastro com sucesso', () => {
        var nome = faker.name.findName()
        var email = faker.internet.email(nome)

        cy.cadastro(nome, email, '123321', '123321')

        cy.get('[data-test="dashboard-createProfile"]').should('be.visible')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)

      
    });

   
});