
class loginpage {

   
    orangeHRMLogo(){

        return 'img[alt="company-branding"]'
    }

    userNameInput(){

        return 'input[name="username"]'
    }


    passwordInput(){

        return 'input[name="password"]'
    }

    loginBtn(){

        return 'button[type="submit"]'
    }


    loginErrorMessage(){

        return 'Invalid credentials'
    }

    loginerror(){

      return 'p.oxd-text.oxd-text--p.oxd-alert-content-text'
    }

    loginwithCreds(username, password){

        cy.get(this.userNameInput()).type(username)
        cy.get(this.passwordInput()).type(password)
        cy.get(this.loginBtn()).click()
    }
}

const login = new loginpage()

export default login