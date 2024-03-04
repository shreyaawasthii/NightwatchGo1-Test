module.exports = {
    elements: {
      goLogo: '.go1up-logo',
      oneLogo: '.onepercenet-logo',
      emailOptionText: 'div#kc-social-providers h4',
      pageTitle: 'h1#kc-page-title',
      microsoftLogo: 'a#social-oidc i.fa-windows',
      username: '#username',
      password: '#password',
      loginButton: '#kc-login',
      inputError: '#input-error',
      rememberMeCheckbox: '.checkmark',
      forgotPasswordLink: 'a[tabindex="5"]',
      submitButton: 'input[type="submit"]',
      termsOfUseLink: 'a[href*="terms-of-use"]',
    //   logoutLink: {
    //     selector: '//a[contains(text(), "Logout")]',
    //     locateStrategy: 'xpath',
    //   },
    },
    commands: [{
        clickCarouselButton(index) {
            const xpathSelector = `//ol[@class='carousel-indicators']/li[@data-target='#myCarousel'][${index}]`;
            this.useXpath()
              .waitForElementVisible(xpathSelector)
              .click(xpathSelector)
              .useCss()
            return this; 
        },

        clickMicrosoftLogo: function () {
            return this.click('@microsoftLogo');
          },

        loginWithCredentials(username, password) {
            return this
              .setValue('@username', username)
              .setValue('@password', password)
              .click('@loginButton');
          },

          checkRememberMeCheckbox(username, password) {
            return this
            .setValue('@username', username)
            .setValue('@password', password)
            .click('@rememberMeCheckbox')
          },

          checkForgotPasswordFunctionality(username) {
            return this.click('@forgotPasswordLink')
            .setValue('@username', username)
            .click('@submitButton');
          },

          clickTermsOfUseLink() {
            return this.click('@termsOfUseLink');
          },
    }],
  };
  