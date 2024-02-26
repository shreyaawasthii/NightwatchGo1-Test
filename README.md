Automated Testing Documentation
This repository contains automated tests for the website https://www.automationexercise.com/. These tests are written using the Nightwatch.js framework with the Page Object Model (POM) design pattern.

Prerequisites:
Before running the automated tests, ensure that you have the following installed:
* Node.js
* npm (Node.js package manager)
* Google Chrome browser

Installation:
To install the necessary dependencies for running the tests, execute the following command in your terminal
npm install
This will install all the required dependencies listed in the package.json file.

Configuration:
Before running the tests, you may need to adjust the configuration settings in the nightwatch.conf.js file to match your environment. For example, you may need to specify the path to the Chromedriver executable.

Test Functionality Overview:
The Functionality.test.js file contains automated tests to verify various functionalities of the website https://www.automationexercise.com/.

Test Cases Covered:
1. HomePage Verification:
Verifies that elements on the homepage are visible and functional.
Includes positive and negative scenarios to check for expected elements and error handling.

2. Login Feature Test:
Tests the user login functionality.
Includes positive test to verify successful login with valid credentials.
Also includes negative test to verify error message display for invalid login credentials.

3. ContactUs Feature Test:
Tests the Contact Us page functionality.
Includes positive test to verify successful submission of the contact form with valid inputs.
Also includes negative test to verify error handling for missing information in the contact form.

Test Structure:
Each test case is encapsulated within a separate it block.
beforeEach and afterEach hooks are used to set up and tear down the test environment before and after each test case execution, respectively.
Screenshots are captured and saved in case of test failures for debugging purposes.

Execution:
Tests are executed using the Nightwatch.js framework.
The npm test command triggers the execution of all test cases defined in the Functionality.test.js file.
