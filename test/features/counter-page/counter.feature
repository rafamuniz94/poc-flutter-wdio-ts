Feature: Flutter Counter

  Scenario: As a user I want to be able to push add button

    Given I am on the Counter page
    When I click the add button
    Then I should see counter increase to "1"
