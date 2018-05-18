Feature: TMSlite Waybill Management

    As a user
    I want to successfully login to tmslite application
    in order to perform actions on waybill managament

    Scenario Outline: User successfully login to tmslite application

        Given tmslite application is open
       # When user login with valid <username> and <password>
        When clicks on the waybill managament tab
        And clicks on the Add New Waybill button
        And user can click on Ok button
        Then user shall see be able to click HOME
        Examples:
            | username  | password   | 
            | testuser1 | Testuser@1 |

