Feature: Verify Login functionality 

    Positive and Nagative tests for Login

@smoke
Scenario: Verify login with Valid credentials 

Given User Launch the Application 
When  User Enter username "Admin" and enter password "admin123"
And   User clicks on login button 
Then User should be navigated to dashbaord page 

Scenario: Verify login with Valid username and invalid password 

Given User Launch the Application 
When  User Enter username "Admin" and enter password "ejtedfdkgh"
And   User clicks on login button 
Then User should get the login error message 


Scenario: Verify login with inalid username and valid password 

Given User Launch the Application 
When  User Enter username "jewfg" and enter password "admin123"
And   User clicks on login button 
Then User should get the login error message 

Scenario: Verify login with inalid username and invalid password 

Given User Launch the Application 
When  User Enter username "jewfg" and enter password "errkfheru"
And   User clicks on login button 
Then User should get the login error message 