Cypress.Commands.add('login', (email, senha) => {

    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()

})


Cypress.Commands.add('cadastro', (nome, email, senha, senha_confirma) => {
    cy.visit('cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha_confirma)
    cy.get('[data-test="register-submit"]').click()


})

Cypress.Commands.add('criarPerfilSemRedesSociais', (
    status, 
    empresa, 
    cidade, 
    estado, 
    conhecimentos, 
    usuarioGitHub, 
    biografia) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('.large').should('contain', 'Crie Seu Perfil')

    cy.get('#mui-component-select-status').click()
    cy.contains('Especialista em QA').click()

    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(cidade + ', ' + estado)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(conhecimentos)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(usuarioGitHub)
    cy.get('[rows="1"]').type(biografia)

    cy.get('[data-test="profile-submit"]').click()


})


Cypress.Commands.add('criarPerfilRedesSociais', (
    status, 
    empresa, 
    cidade, 
    estado, 
    conhecimentos, 
    usuarioGitHub, 
    biografia, 
    twitter, 
    facebook, 
    youtube, 
    linkedin, 
    instagram, 
    medium) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('.large').should('contain', 'Crie Seu Perfil')

    cy.get('#mui-component-select-status').click()
    cy.contains('Especialista em QA').click()

    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(cidade + ', ' + estado)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(conhecimentos)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(usuarioGitHub)
    cy.get('[rows="1"]').type(biografia)
    cy.get('[data-test="profile-socials"]').click()
    cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type(twitter)
    cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type(facebook)
    cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type(youtube)
    cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type(linkedin)
    cy.get('[data-test="profile-instagram"]').type(instagram)
    cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type(medium)


    cy.get('[data-test="profile-submit"]').click()


})


Cypress.Commands.add('criarPerfilConhecumentosNaoInfo', (
    status, 
    empresa, 
    cidade, 
    estado, 
    usuarioGitHub, 
    biografia
    ) => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('.large').should('contain', 'Crie Seu Perfil')

    cy.get('#mui-component-select-status').click()
    cy.contains('Especialista em QA').click()


    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(cidade + ', ' + estado)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(usuarioGitHub)
    cy.get('[rows="1"]').type(biografia)



    cy.get('[data-test="profile-submit"]').click()


})

import user from "../fixtures/usuario.json"

Cypress.Commands.add('GetToken', () => {

    cy.request({

        method: 'POST',
        url: 'api/auth',
        body: {
            "email": user.usuario,
            "password": user.senha
        }

    }).then((response) => {
        expect(response.status).to.equal(200)
        return response.body.jwt

    })




})


Cypress.Commands.add('criarPost', (token, text) => {

  
    cy.request({
        method: 'POST',
        url: "/api/posts",
        headers: { Cookie: token },
        body: {
            "text": text
        }
    }).should((response) => {
      
      

    })




})


Cypress.Commands.add('curtirPost', (token, postID) => {
  
    cy.request({
        method: 'PUT',
        url: `/api/posts/like/${postID}`,
        headers: { Cookie: token },       
    }).should((response) => {  
    })

})

Cypress.Commands.add('deletarPost', (token, postID) => {
  
    cy.request({
        method: 'DELETE',
        url: `/api/posts/${postID}`,
        headers: { Cookie: token },       
    }).should((response) => {  
    })

})


