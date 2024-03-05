

module.exports = {
    elements: {
      myActivity: '.nav-item.my-1.cursor-pointer.text-bold.p-2.newTabs',
      settings: {
        selector: '(//i[contains(text(), "settings")])[1]',
        locateStrategy: 'xpath',
      }, 
      profile: {
        selector: '//span[contains(text(), "Profile")]',
        locateStrategy: 'xpath',
      },

    },
    commands: [{

        // clickMicrosoftLogo: function () {
        //     return this.click('@microsoftLogo');
        //   },

        // loginWithCredentials(username, password) {
        //     return this
        //       .setValue('@username', username)
        //       .setValue('@password', password)
        //       .click('@loginButton');
        //   },
    }],
};
