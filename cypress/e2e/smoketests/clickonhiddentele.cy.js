import login from "../../pages/loginpage"

describe('Click spec', () => {


    it('Click', () => {

      cy.on("uncaught:exception", ()=>{

        return false
      })

      cy.visit('https://cypress.io')

      cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().click({force:true})


    })


    it('Type', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.userNameInput()).type("Admin", {delay : 0})

        cy.get(login.passwordInput()).type("admin123{enter}")
    })


    it('Dropadown', () => {

        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")

        // //text
        
        // cy.get('select[name^="DOB_Month"]').select("AUG")

        //value 

         // cy.get('select[name^="DOB_Month"]').select("04")

         //index 

         cy.get('select[name^="DOB_Month"]').select(3).should("have.value", "03")

    })

    
    it('Check box', () => {

        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")

        cy.get('input[name^="chk_altemail"]').check().should("be.checked")

        //cy.get('input[name^="chk_altemail"]').should("be.checked")

        cy.wait(3000)

        cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")

      
      
    })

    it('Check box', () => {


      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.userNameInput()).type("Admin", {delay : 0})

        cy.get(login.passwordInput()).type("admin123{enter}")
        cy.contains("PIM").click()

        cy.get('input[type="checkbox"]').check({force:true})

        
        cy.get('input[type="checkbox"]').uncheck({force:true})
      
    })

    it('Check box', () => {


      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.userNameInput()).type("Admin", {delay : 0})

        cy.get(login.passwordInput()).type("admin123{enter}")
        cy.contains("PIM").click()

        cy.get('input[type="checkbox"]').check(["4","5"],{force:true})

        
        
      
    })

    it.only('RAdio button', () => {

        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")

        cy.get('input[value="f"]').check().should("be.checked")
      
        //cy.get('input[value="f"]').uncheck()
    
      
    })
    



  
  })