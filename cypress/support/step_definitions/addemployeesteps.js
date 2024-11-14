import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import dashboard from "../../pages/dashboardpage"
import addemployee from '../../pages/addemployeepage'

import data from "../../fixtures/PIM/addemployee.json"
When('User clicks on PIM', ()=>{

    cy.get(dashboard.pimMenu()).click()
})


When("User clicks on Add employee submenu", ()=>{

    cy.contains(addemployee.addemployeeSubMenu()).click()
})


When("User enter firstname {string} and lastname as {string}", (firstName, lastName)=>{

     cy.get(addemployee.firstNameInput()).type(firstName)
     cy.get(addemployee.lastNameKInput()).type(lastName)

})

When("user enter firstname and lastname", ()=>{

         cy.get(addemployee.firstNameInput()).type(data.firstname)
         cy.get(addemployee.lastNameKInput()).type(data.lastname)
    
    })

When("User clicks on save button", ()=>{

    cy.get(addemployee.saveBtn()).click()
})

Then("User should get successfully saved message", ()=>{

    cy.contains(addemployee.successMessage()).should("be.visible")
})

Then('User should get error message for firstname and lastname fields', ()=>{

    cy.get(addemployee.requiredErrorMessage()).first().should("be.visible")
    cy.get(addemployee.requiredErrorMessage()).last().should("be.visible")
})