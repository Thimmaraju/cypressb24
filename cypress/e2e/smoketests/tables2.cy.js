
describe("suitename", () => {


    it("test cae 1", () => {

        cy.visit('https://the-internet.herokuapp.com/tables')

        cy.get('table').should("have.length", 2) //- How many tables

        cy.get('#table1 >tbody >tr').should("have.length", 4) //- How manu rows

        cy.get('#table1 >tbody >tr:nth-child(1) >td').should("have.length", 6) //- How many coloumns

        cy.get('#table1 >thead>tr:nth-child(1) >th').should("have.length", 6)

        //1 way
        cy.get('#table1 >tbody>tr:nth-child(2) >td:nth-child(3)').then((text) => {


            var textvalue = text.text()

            expect(textvalue).to.equal("fbach@yahoo.com")
        })


       //other way

        cy.get('#table1 >tbody>tr:nth-child(2) >td:nth-child(3)').should('have.text', 'fbach@yahoo.com')



        cy.contains("Doe").parent().within(() => {

            cy.get("td").eq(5).find('a[href="#delete"]').click()

            cy.get("td").eq(3).should("have.text", "$100.00")

        })
        cy.get('#table1 > tbody >tr').each((rows) => {

            cy.wrap(rows).within((celldata) => {

                cy.log(celldata.text())

            })
        })



    })


})