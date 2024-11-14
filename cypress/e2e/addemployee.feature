Feature: Verify Add Employee functionality

    Positive and Nagative tests for Add Employee functionality

Background: Navigate to add employee
 
        Given User Launch the Application
        When  User Enter username "Admin" and enter password "admin123"
        And   User clicks on login button
        Then User should be navigated to dashbaord page
        When User clicks on PIM
        And  User clicks on Add employee submenu
    # Scenario: Verify add employee with Mandotory details

    # Given User Launch the Application
    # When  User Enter username "Admin" and enter password "admin123"
    # And   User clicks on login button
    # Then User should be navigated to dashbaord page
    # When User clicks on PIM
    # And  User clicks on Add employee submenu
    # And User enter firstname "Sai" and lastname as "Teja"
    # #And user enter firstname and lastname
    # And User clicks on save button
    # Then User should get successfully saved message

  
    Scenario: Verify add employee error message for mandotory fields
        And User clicks on save button
        Then User should get error message for firstname and lastname fields
    @smoke @regression
    Scenario Outline: Verify add employee with Mandotory details
      
        And User enter firstname "<firstname>" and lastname as "<lastname>"
        #And user enter firstname and lastname
        And User clicks on save button
        Then User should get successfully saved message

        Examples:
            | firstname  | lastname |
            | Mamataha   | S        |
            | Ranganatha | D        |
            | Venkey     | xyz      |