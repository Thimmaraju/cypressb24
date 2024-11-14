import data from "../../fixtures/Admin/addjobtitle.json"

describe('Verify Add Job title Functionalities', () => {


//for(let i=1 ; i<=10; i++){

const jobtitles  = ["SDET I", "SDET II", "SDET III"]

jobtitles.forEach(element => {
  
  it(`Verify add job title with Mandatory deatils- ${element}`, () => {
 
    cy.login("Admin","admin123")

    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.contains("Job").click()
    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

    let r = (Math.random() + 1).toString(36).substring(5);
    cy.log(r)
    cy.get('input[class="oxd-input oxd-input--active"]').last().type(element+r)
    cy.get('textarea[placeholder="Type description here"]').type(data.jobdescription)
    cy.get('button[type="submit"]').click()
    cy.contains("Successfully Saved").should("be.visible")

   })
});

//}


  

})