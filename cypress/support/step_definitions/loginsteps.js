import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import login from "../../pages/loginpage"
Given("User Launch the Application", () => {

    cy.visit('/web/index.php/auth/login')

})

When('User Enter username {string} and enter password {string}', (username, password) => {

    cy.get(login.userNameInput()).type(username)
    cy.get(login.passwordInput()).type(password)

})

When('User clicks on login button', ()=>{

    cy.get(login.loginBtn()).click()
})

Then("User should be navigated to dashbaord page", ()=>{

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})

Then("User should get the login error message", ()=>{

    cy.contains(login.loginErrorMessage()).should("be.visible")
})