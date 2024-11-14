import login from "../../pages/loginpage"

import dashboard from "../../pages/dashboardpage"
describe('Verify Login functionality ', () => {

    const menuitems = {

        menu1 : "Admin",
        menu2 : "PIM",
        menu3 : "Leave",
        menu4 : "Time",
        menu5 : "Recruitment",
        menu6 : "My Info",
        menu7 : "Performance",
        menu8 : "Dashboard",
        menu9 : "Directory",
        menu10: "Maintenance",
        menu11 : "Claim",
        menu12 : "Buzz"
    }

    it('Verify Logo visible in login page', () => {
        
    
         cy.visit('/web/index.php/auth/login')
         cy.get(login.orangeHRMLogo()).should("be.visible")

      })

      it.only('Verify login with valid credentials', () => {
        

        cy.login("Admin", "admin123")
        //or 

        for (let i in menuitems){

            //console.log(menuitems[i])

            cy.contains(menuitems[i]).should("be.visible")
        }

        cy.get(dashboard.timeandWorkHeader()).should("be.visible")

        
     })

     it('Verify login with valid username and Invalid password', () => {
        
         let username = "Admin"
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
       login.loginwithCreds(username, "fewnhfnbew")
        cy.contains(login.loginErrorMessage()).should("be.visible")

        cy.get(login.loginerror()).then((text)=>{

            var errorMessage = text.text()
            cy.log(errorMessage)
            expect(errorMessage).to.equal(login.loginErrorMessage())
        })
     })

     it("Verify login with invalid username and valid password", () => {
        

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        login.loginwithCreds("rfnm", "admin123")
        cy.get(login.loginerror()).should("be.visible")
        cy.get(login.loginerror()).then((text)=>{

            var errorMessage = text.text()
            cy.log(errorMessage)
            expect(errorMessage).to.equal(login.loginErrorMessage())
        })

     })

     it('Verify login with invalid username and invalid password', () => {
        
        let creds = {

            "wrongusername": "ewrfbhuh",
            "wrongpassword": "kjfn"
        }

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        login.loginwithCreds(creds.wrongusername, creds.wrongpassword)
        cy.contains(login.loginErrorMessage()).should("be.visible")
        cy.get(login.loginerror()).then((text)=>{

            var errorMessage = text.text()
            cy.log(errorMessage)

            expect(errorMessage).to.equal(login.loginErrorMessage())
        })
     })



  })