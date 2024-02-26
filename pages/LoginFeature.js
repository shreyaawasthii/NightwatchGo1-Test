module.exports = {
  elements: {
    loginLink: {
      selector: '//a[contains(text(), "Login")]',
      locateStrategy: 'xpath',
    },
    emailInput: 'input[data-qa="login-email"][name="email"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[data-qa="login-button"]',
    logoutLink: {
      selector: '//a[contains(text(), "Logout")]',
      locateStrategy: 'xpath',
    },
    invalidCredentialError: {
      selector: '//p[contains(text(), "Your email or password is incorrect!")]',
      locateStrategy: 'xpath',
    }
  },
  commands: [{
    verifyLoginLink(){
      return this
        .waitForElementVisible('@loginLink')
        .click('@loginLink')
    },
    
    performLogin(email, password) {
      return this
        .waitForElementVisible('@emailInput')
        .setValue('@emailInput', email)
        .waitForElementVisible('@passwordInput')
        .setValue('@passwordInput', password)
        .click('@loginButton')
    },
  }],
};
