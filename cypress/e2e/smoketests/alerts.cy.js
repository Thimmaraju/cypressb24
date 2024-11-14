describe('Alerts', () => {
    it('Handing alerts', () => {


      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

      cy.contains('Click for JS Alert').click()

      cy.on('window:alert', (alert)=>{


        expect(alert).to.equal("I am a JS Alert")
        return true 


      })


    })


    it('Handing alerts - confirm', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.contains('Click for JS Confirm').click()
  
        cy.on('window:confirm', (alert)=>{

          return true 
  
        })
  
  
      })

      it('Handing alerts - Pompt', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.window().then(($win) =>{

            cy.stub($win, 'prompt').returns("Venkey")
            cy.contains("Click for JS Prompt").click()
        })
  
  
      })

      it('Handing alerts - Pompt - Cancel', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
        cy.window().then(($win) =>{

            cy.stub($win, 'prompt').callsFake(()=> null)
            cy.contains("Click for JS Prompt").click()
        })
  
  
      })
  })