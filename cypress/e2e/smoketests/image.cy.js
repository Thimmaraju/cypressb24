describe('Verify Login functionality', () => {


    it('Verify login with valid credentials', () => {
    
        
      cy.visit("/web/index.php/auth/login")

      cy.get('img[alt="company-branding"]').should("exist")
      cy.get('img[alt="company-branding"]').should("be.visible")
      //cy.get(locator).should("have.attr", "attrname", "attrvalue")

      cy.get('img[alt="company-branding"]').should("have.attr", "src","/web/images/ohrm_branding.png?v=1721393199309")

    })
    9
})