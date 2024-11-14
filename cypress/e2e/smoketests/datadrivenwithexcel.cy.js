///<reference types="cypress"/>

import data from "../../fixtures/ExceltoJson/user_data.json"
import login from '../../pages/loginpage'


describe('Automation - Working With Data driven testing json', function () {

  data.forEach((data) =>{

        
        it(`Cypress Test Case - for ${data.username}`, function () {
            cy.login(data.username, data.password)
            cy.contains(login.loginErrorMessage()).should("be.visible")

          })

    })
    
})



  
        // it('Cypress Test Case - Understanding Data driven testing json', function () {
        //     cy.visit('https://the-internet.herokuapp.com/login'); 
        //     cy.get('#username').type(data.username);
        //     cy.get('#password').type(data.password);
        //     cy.get('button[type="submit"]').click();
        //     cy.get('.flash.error').should("be.visible")

        //   })

