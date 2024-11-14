import data from "../../fixtures/APIdata/addemployee.json"
describe("Verify GET Job title API", ()=>{

    it("Verify GET job title API is Working ", ()=>{

        cy.request({
            method: "GET",
            url: "/web/index.php/api/v2/admin/job-titles?limit=50&offset=0&sortField=jt.jobTitleName&sortOrder=ASC",
            headers:{
               "cookie": Cypress.env("cookievalue")
            }
          
          }).then((response) =>{
          
             expect(response.status).to.equal(200)
             expect(response.body.data[0].title).to.equal("Account Assistant")

             cy.writeFile("cypress/fixtures/APIresponse/sample.txt", response)
          })
          
    })

    it("Verify GET job title API for 401 ", ()=>{

        cy.request({
            method: "GET",
            url: "/web/index.php/api/v2/admin/job-titles?limit=50&offset=0&sortField=jt.jobTitleName&sortOrder=ASC",
            headers:{
               "cookie": "ebgfhberignjeriutng"
            },
            failOnStatusCode: false
          
          }).then((response) =>{
          
             expect(response.status).to.equal(401)
             
          })
          
    })

    it.only("Verify Create Employee POST request", ()=>{

        data.employeeId = (Math.random() + 1).toString(36).substring(5);

        cy.log(data.employeeId)
        cy.request({
            method: "POST",
            url: "/web/index.php/api/v2/pim/employees",
            headers:{
               "cookie": Cypress.env("cookievalue")
            },
            body: data
          
          }).then((response) =>{
          
             expect(response.status).to.equal(200)

             expect(response.body.data).to.have.property("empNumber")

             expect(response.body.data.empNumber).not.to.be.empty

             Cypress.env('sample', response.body.data.employeeId);

             cy.log(Cypress.env("sample"))
             cy.writeFile("cypress/fixtures/APIresponse/sample2.txt", response)
             
          })
          
    })
})