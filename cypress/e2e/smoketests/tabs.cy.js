
describe("Explaining Tabs ", ()=>{

    it('Click', () => {

        cy.on("uncaught:exception", ()=>{
    
          return false
        })
    
        cy.visit('https://cypress.io')
    
        cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke("removeAttr", "target").click({force:true})

        cy.url().should("eq", "https://docs.cypress.io/app/get-started/install-cypress")
    
    
        cy.go(-1) //backword

        cy.go(1) //forword

      })
}) 
