describe('template spec', () => {
    it('Exaple for getting the text', () => {


      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('.product-action').eq(0).click()
      cy.get('.product-action').eq(1).click()

      cy.contains('Brocolli - 1 Kg').parent().find('p[class="product-price"]').then((text)=>{

        var price1 = text.text()
        cy.log("Price 1 =  " + price1)

        expect(price1).to.equal("120")
     })

     cy.contains('Cauliflower - 1 Kg').parent().find('p[class="product-price"]').then((text)=>{

        var price2 = text.text()
        cy.log("Price 2 =  " + price2)

        expect(price2).to.equal("60")
     })
     

    })
  })