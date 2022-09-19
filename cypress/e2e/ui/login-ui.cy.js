/// <reference types="cypress" />

import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {

    before(() => {
        // Executar algo antes de todos os cenários
    });

    beforeEach(() => {
        // Executar algo antes de cada os cenários
        cy.viewport(1366, 768)
        cy.visit('login')
        //cy.screenshot()

    });

    after(() => {
        // Executar algo depois de todos os cenários
    });

    afterEach(() => {
        // Executar algo depois de cada cenários
        //cy.screenshot()
    });

    it('Deve efetuar login com sucesso', () => {


        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@usuario.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123321')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Tiago Matos')


    });
    it('Deve validar mensagem de erro ao efetuar login com dados inválidos', () => {


        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@usuario.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123322')
        cy.get('[data-test="login-submit"]').click()

        //  cy.log(cy.get('[data-test="alert"]'))

        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')



    });
    it('Deve efetuar login com sucesso - Usando commands', () => {
        cy.login('teste@usuario.com', '123321')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Tiago Matos')
    });

    it('Deve efetuar login com sucesso usando massa de dados', () => {
        cy.login(usuario.usuario, usuario.senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + usuario.nome)
    });

    it('Deve efetuar login com sucesso usando Fixture', () => {

        cy.fixture("multi-usuarios").then((multi) => {
            cy.login(multi[0].usuario, multi[0].senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + multi[0].nome)

        })

    });
});