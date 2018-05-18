Feature: Login to TMSLite application

    As a user
    I want to successfully login to tmslite application
    in order to perform user actions

    Scenario Outline: User successfully login to tmslite application

        Given tmslite application is open
        When user clicks on the login button
        And valid <username> and <password> is provided
        And clicks on the signin button
        Then <expectedText> is displayed on the home page
        Examples:
            | username  | password   | expectedText       |
            | testuser1 | Testuser@1 | Welcome to TMSlite |