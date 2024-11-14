// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')

import login from "../pages/loginpage"
import addemployee from '../pages/addemployeepage';
Cypress.Commands.add('login', (username, password) => {

    cy.visit('/web/index.php/auth/login')
    cy.log("Url Lauch")
    //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
    cy.get(login.userNameInput()).type(username)

    cy.log("Username Typed is "+ username) 
    cy.get(login.passwordInput()).type(password)
    cy.get(login.loginBtn()).click()

    //cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

 })

 Cypress.Commands.add('addemployee', (firstname, lastname) => { 

    cy.get(addemployee.firstNameInput()).type(firstname)
    cy.get(addemployee.lastNameKInput()).type(lastname)

    cy.get(addemployee.saveBtn()).click()
    cy.contains(addemployee.successMessage()).should("be.visible")

  })