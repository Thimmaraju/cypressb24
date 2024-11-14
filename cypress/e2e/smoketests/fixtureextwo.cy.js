


describe('Verify Add employee functionality', function () {

  before(function () {
    cy.fixture('PIM/addemployee.json').then(function (data) {
      this.data = data;
    })
  })

  it('Verify add employee with Mandotory details', function () {

    cy.log("Test execution started")
    cy.login("Admin", "admin123")

    cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //or

    cy.url().should("include", "/web/index.php/dashboard/index")

    cy.contains("PIM").click()

    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type(this.data.firstname)
    cy.get('input[name="lastName"]').type(this.data.lastname)

  })


})