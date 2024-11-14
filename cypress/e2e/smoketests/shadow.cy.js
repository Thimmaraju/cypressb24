///<reference types="cypress"/>

describe('Automation - Working with Shadowroot elements 2', function () {

  it('Cypress Test Case - Shadow', function () {

    Cypress.on("uncaught:exception", function () {
  
      return false;
    });

    cy.visit('http://watir.com/examples/shadow_dom.html');

    //cy.get("input[type='text']").type("cypress");


     cy.get('#shadow_host').shadow().find('[type="checkbox"]').check()

    cy.get('#shadow_host').shadow().find("input[type='text']").type("Raju")


  })

  it.only("new site for Shadow example", ()=>{


    cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')

    //cy.get('').click()

    cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="File"]').realClick()
   

})

})
