/// <reference types="cypress" />

var faker = require('faker-br')

describe('Funcionalidade: Criação de Perfil', () => {


    beforeEach(() => {
        // Executar algo antes de cada os cenários
        cy.viewport(1366, 768)
        // cy.visit('criar-perfil')
        //cy.screenshot()

    });

    it('Criar perfil com sucesso', () => {
        var nome = faker.name.findName()
        var email = faker.internet.email(nome)
        
      
        var cidade = faker.address.city()
        var estado =  faker.address.stateAbbr()
        

        cy.cadastro(nome, email, '123321', '123321')

        cy.get('[data-test="dashboard-createProfile"]').should('be.visible')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)

        cy.criarPerfil()

        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
       
        cy.get('[data-test="dashboard-deleteProfile"]').click()


        cy.get('.alert-undefined').should('contain', 'Sua conta foi removida')
       
       

    });
});