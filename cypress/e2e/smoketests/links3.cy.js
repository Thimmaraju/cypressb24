
describe('Automation - Working With Tabs in webpage', function () {

    it('Cypress Test Case - Understanding Tabs in webpage', function () {
  
  
      Cypress.on("uncaught:exception", (err, runnable) => {
  
        return false;
      });
  
  
      cy.visit('https://trello.com/');

      cy.contains("Log in").click()

      cy.origin('https://id.atlassian.com', () => {

        cy.get('#username').type("Rajutester2673@gmail.com")

      })


    })

})