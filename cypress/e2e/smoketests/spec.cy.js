describe('template spec', () => {
  it('passes', () => {

    Cypress.on("uncaught:exception", (err, runnable) => {
  
      return false;
    });

    cy.visit('https://cypress.io')

    cy.contains("app quality").scrollIntoView()
  })
})