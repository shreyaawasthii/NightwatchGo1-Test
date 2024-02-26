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

Configuration
Before running the tests, you may need to adjust the configuration settings in the nightwatch.conf.js file to match your environment. For example, you may need to specify the path to the Chromedriver executable.

Usage:
To run the automated tests, execute the following command in your terminal:
npm test
This command will execute all the test cases defined in the Functionality.test.js file.

Test Structure:
The tests are organized into separate test suites based on the different features of the website. Here's an overview of the test suites available:
* HomePage Verification: Tests related to verifying elements on the homepage of the website.
* Test Login Feature: Tests related to user login functionality, including positive and negative scenarios.
* Test ContactUs Feature: Tests related to the Contact Us page, including form submission with valid and invalid inputs.
* Test Search Feature: Tests related to the search functionality on the website.
* Test Purchase Product Feature: Tests related to the product purchase functionality on the website.

