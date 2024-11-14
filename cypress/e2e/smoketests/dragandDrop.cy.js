describe('DD spec', () => {
    it('Expalin Drang and drop ', () => {

      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')

      // 1st approach - plugin 4tw/cypress-drag-drop

      //cy.get('.sourceitem').drag('.targetitem')

      cy.get('#menu-fried-chicken').drag('#plate-items')

      //cy.get('#menu-hamburger').drag('#plate-items')

      //2nd Approach - Datatransfer class 

      const dataTransfer = new DataTransfer();

      cy.get('#menu-hamburger').trigger('dragstart',{
    
        dataTransfer
      })

     cy.get('#plate-items').trigger('drop',{

        dataTransfer
      })

      cy.get('#menu-ice-cream').trigger('dragstart',{
    
        dataTransfer
      })

     cy.get('#plate-items').trigger('drop',{

        dataTransfer
      })



    })
  })