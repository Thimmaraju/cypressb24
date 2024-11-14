describe('Automation - Working With Iframe', function () {

    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://jqueryui.com/checkboxradio/');

      cy.get('#radio-2').check()

     
    })

    it.only('Select Radio Button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then(($iframe) =>{

           let radio2 = $iframe.contents().find('#radio-2')

           cy.wrap(radio2).check({force:true})
        })


       //    cy.contains("Download").click()


       //cypress-iframe - plugin

    
   })


  })

  //LKQ 
  



  


