class addEmployeePage{

     addemployeeSubMenu(){

        return 'Add Employee'
     }

     firstNameInput(){

        return 'input[name="firstName"]'
     }

     lastNameKInput(){

        return 'input[name="lastName"]'
     }

     saveBtn(){

        return 'button[type="submit"]'
     }

     successMessage(){

        return "Successfully Saved"
     }

     requiredErrorMessage(){

        return 'span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
     }

}

const addemployee = new addEmployeePage()
export default addemployee