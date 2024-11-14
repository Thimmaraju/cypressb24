describe('Verify file upload', () => {


    it('Verify file uploading - selectFile', () => {

        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
        cy.get('input[name="upfile"]').selectFile("D:/learncypressb24/cypress/fixtures/testfiles/B24 Automation.txt")
        cy.get('input[type="submit"]').click()

    })

    it('Verify file uploading - attachFile', () => {

        cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
        cy.get('input[name="upfile"]').attachFile('testfiles/B24 Automation.txt')
        cy.get('input[type="submit"]').click()

    })

    it.only("downloadfile examaple", ()=>{


        cy.downloadFile("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/8a/ae/24/tbilisi.jpg?w=1200&h=-1&s=1", "cypress/downloads", "tbilisi.jpg")

        cy.readFile("cypress/downloads/tbilisi.jpg").should("exist")
    })

    it.only("downloadfile examaple", ()=>{


        cy.downloadFile("https://opensource-demo.orangehrmlive.com/web/images/ohrm_branding.png?v=1721393199309", "cypress/downloads", "logo.png")

        cy.readFile("cypress/downloads/logo.png").should("exist")
    })

})