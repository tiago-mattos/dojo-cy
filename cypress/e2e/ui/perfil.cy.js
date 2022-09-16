/// <reference types="cypress" />


import perfil from "../../fixtures/perfil-usuario.json"
import { loremIpsum } from "lorem-ipsum"

var faker = require('faker-br')


describe('Funcionalidade: Criação de Perfil', () => {


    beforeEach(() => {
        // Executar algo antes de cada os cenários

        cy.visit('criar-perfil')
        //cy.screenshot()

    });

    it('Criar perfil sem redes sociais', () => {
        var nome = faker.name.findName()
        var email = faker.internet.email(nome).replace('..', '.')
        var senha = '123321'
        var confirmaSenha = '123321'

        cy.cadastro(nome, email, senha, confirmaSenha)

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)
        cy.get('[data-test="dashboard-createProfile"]').should('be.visible').then(() => {
            cy.criarPerfilSemRedesSociais(perfil.empresa, perfil.cidade, perfil.estado, perfil.conhecimentos, perfil.usuarioGitHub, perfil.biografia)

            cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
        });




    });

    it('Criar perfil com redes sociais', () => {
        var nome = faker.name.findName()
        var email = faker.internet.email(nome).replace('..', '.')
        var senha = '123321'
        var confirmaSenha = '123321'

        cy.cadastro(nome, email, senha, confirmaSenha)

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)
        cy.get('[data-test="dashboard-createProfile"]').should('be.visible').then(() => {
            cy.criarPerfilRedesSociais(perfil.empresa, perfil.cidade, perfil.estado, perfil.conhecimentos, perfil.usuarioGitHub, perfil.biografia, perfil.urlTwitter, 
                perfil.urlFacebook, perfil.urlYoutube, perfil.urlLinkedin, perfil.urlInstagram, perfil.urlMedium)

            cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
        });




    });

    it('Deletar conta', () => {
        var nome = faker.name.findName()
        var email = faker.internet.email(nome).replace('..', '.')
        var senha = '123321'
        var confirmaSenha = '123321'

        cy.cadastro(nome, email, senha, confirmaSenha)

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)
        cy.get('[data-test="dashboard-createProfile"]').should('be.visible').then(() => {
            cy.criarPerfilSemRedesSociais(perfil.empresa, perfil.cidade, perfil.estado, perfil.conhecimentos, perfil.usuarioGitHub, perfil.biografia)

            cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
        });



        cy.get('[data-test="dashboard-deleteProfile"]').click()
        cy.get('.alert-undefined').should('contain', 'Sua conta foi removida')



    });

});