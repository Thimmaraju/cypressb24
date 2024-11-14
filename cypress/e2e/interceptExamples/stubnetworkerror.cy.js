

context("Verify Add employee functionality", () => {

  beforeEach( "Login", ()=>{

    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC", {
      forceNetworkError: true,
    }).as("getEmployees")

    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits", {
      forceNetworkError: true,
    }).as("subunits")

   cy.login("Admin", "admin123")

    cy.get('a.oxd-main-menu-item.active').should("be.visible")
    
})

afterEach( ()=>{

  cy.log("Test Execution is Completed")
  
})


  it("Verify Add Employee error message for Mandotory fields", () => {

    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
     // verify where this API called 
     // verify subbed response
    cy.wait('@subunits').then(() => {
        
         cy.contains('Error').should("be.visible")
      })

  })


})