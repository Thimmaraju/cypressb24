
import addempdata from "../../fixtures/PIM/addemployee.json"
import dashboard from "../../pages/dashboardpage"

import addemployee from "../../pages/addemployeepage"

describe('Verify Add employee Functionalities', function () {


   beforeEach("login", ()=>{

    cy.login(Cypress.env("username"), Cypress.env("password"))
    //cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //or 

    cy.get(dashboard.pimMenu()).click()
    cy.contains(addemployee.addemployeeSubMenu()).click()

   })

  if(Cypress.browser.name == "firefox" || "chrome"){

  specify.only('Verify add employee with Mandatory deatils', function () {
 
  

    cy.get(addemployee.firstNameInput()).type(addempdata.firstname)
    cy.get(addemployee.lastNameKInput()).type(addempdata.lastname)

    cy.get(addemployee.saveBtn()).click()
    cy.contains(addemployee.successMessage()).should("be.visible")

    cy.url().should("include", "web/index.php/pim/viewPersonalDetails/empNumber" )



  })
  }
  if(Cypress.browser.name == "chrome" || "firefox"){

    specify.only('Verify Error massages display for Mandatory fileds', () => {
 
   
  
      cy.get(addemployee.saveBtn()).click()
     
  
      cy.get(addemployee.requiredErrorMessage()).eq(0).should("be.visible")
  
      cy.get(addemployee.requiredErrorMessage()).eq(1).should("be.visible")
    
  
    })

  }




})