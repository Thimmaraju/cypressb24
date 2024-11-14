describe("My Test suite name", ()=>{



    before("Before all",()=>{
     
        cy.log("Before 1st test i want print this")

    })

    beforeEach("Before all",()=>{
     
        cy.log("Before Each test i want print this")

    })
    after("after all",()=>{
     
        cy.log("After All tests i want print this")

    })

    afterEach("Before all",()=>{
     
        cy.log("After Each test i want print this")

    })


    it("test case 1 title",() =>{
     
       cy.log("This is 1st test case body")

    })

    it("test case 2 title",() =>{
     
        cy.log("This is 2nd test case body")

    })

    it("test case 3 title",() =>{
      
        cy.log("This is 3rd test case body")

    })
})