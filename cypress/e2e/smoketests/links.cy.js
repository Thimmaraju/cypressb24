
describe('Automation - Working With Links', function () {

  it('Cypress Test Case - Understanding Links and how to work with Links', function () {
    cy.visit('https://www.wikipedia.org/');

    cy.get("a").should('have.length', 356)

    cy.get('a').contains('Commons').click();



    cy.origin('https://commons.wikimedia.org', () => {

      cy.url().should("include", "wiki/Main_Page")

      cy.get('a').its('length').then((elelength) => {
        var lengthcount = elelength
        cy.log(lengthcount)

       // expect(lengthcount).to.equal(698)

        expect(lengthcount).to.be.within(600, 700)
      })

      cy.get('.vector-menu-content-list').eq(6).find('a').its('length').then((elelength) => {
        cy.log(elelength)
        expect(elelength).to.equal(5)
      })


      cy.get('a[href="/wiki/Category:Images"]').then((txt)=>{

        var textvalue = txt.text()

        cy.log(textvalue)
      })
  

    })


  })

  it.only("interview question and answer", () => {

    cy.visit('https://www.flipkart.com/')

    cy.get('div._3sdu8W.emupdz > a:nth-child(2) > div > div > span > span').then((txt) => {

      var eletext = txt.text()

      cy.log(eletext)
       cy.writeFile('cypress/fixtures/module2/test3.txt', eletext)

       cy.writeFile('cypress/fixtures/module2/flipcart2.json', { menutext: eletext });
      expect(eletext).to.equal("Mobiles")

    })

  })

})

