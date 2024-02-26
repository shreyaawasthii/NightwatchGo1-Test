let HomePage = browser.page.HomePage();
let LoginFeature = browser.page.LoginFeature();
let ContactUs = browser.page.ContactUs();
let SearchFeature = browser.page.SearchFeature();
let PurchaseProduct = browser.page.PurchaseProduct();;


describe('HomePage Verification', () => {
    beforeEach((browser) => {
        browser
        .window.maximize()
        .url("https://www.automationexercise.com/")
      

});

afterEach(async (browser) => {
  if (browser.currentTest.results.failed > 0 || browser.currentTest.results.errors > 0) {
      try {
          const result = await browser.saveScreenshot(`screenshots/${browser.currentTest.module}_${browser.currentTest.name}.png`);
          if (result.status !== 0) {
              console.log('Error while capturing screenshot:', result);
          }
      } catch (error) {
          console.error('Error while capturing screenshot:', error);
      }
  }
  browser.end();
});

  // Positive test
  it('Verify that the elements of HomePage are visible', function(browser) {
    HomePage
      .waitForElementVisible('@header', 5000)
      .assert.titleContains('Automation Exercise')
      .expect.element('@navBar').to.be.present
      //.assert.element('@homeLink').to.be.present;
  });


  // Negative test
  it('Verify that an error is displayed for an invalid URL addition', (browser) => {
    const invalidUrl = 'https://www.automationexercise.com/';
    browser.url(invalidUrl);

  HomePage
    .verify.titleContains('Error')
    .verify.urlEquals(invalidUrl);
  });

  // Negative test
  it('Verify that the navigation menu does not contain Home icon or link', (browser) => {
    HomePage
    .verify.not.elementPresent('@homeLink');
  });

});

  describe('Test Login Feature', () => {
    beforeEach((browser) => {
      browser
      .window.maximize()
      .url("https://www.automationexercise.com/")
    

});

afterEach(async (browser) => {
  if (browser.currentTest.results.failed > 0 || browser.currentTest.results.errors > 0) {
      try {
          const result = await browser.saveScreenshot(`screenshots/${browser.currentTest.module}_${browser.currentTest.name}.png`);
          if (result.status !== 0) {
              console.log('Error while capturing screenshot:', result);
          }
      } catch (error) {
          console.error('Error while capturing screenshot:', error);
      }
  }
  browser.end();
});

  // Positive test
  it('Verify that the user is able to successfully logged in', function(browser) {
    LoginFeature
      .verifyLoginLink()
      .performLogin('demouser@gmail.com', 'password123')
      .expect.element('@logoutLink').to.be.visible;
  });

  // Negative Test
  it('Verify if the user can log in with invalid credentials', function(browser){
    LoginFeature
    .verifyLoginLink()
    .performLogin('unregistereduser@hotmail.com','password123')
    .expect.element('@invalidCredentialError').to.be.present
    
  })

});


describe('Test ContactUs Feature', () => {
  beforeEach((browser) => {
      browser
      .window.maximize()
      .url("https://www.automationexercise.com/")
    

});

afterEach(async (browser) => {
  if (browser.currentTest.results.failed > 0 || browser.currentTest.results.errors > 0) {
      try {
          const result = await browser.saveScreenshot(`screenshots/${browser.currentTest.module}_${browser.currentTest.name}.png`);
          if (result.status !== 0) {
              console.log('Error while capturing screenshot:', result);
          }
      } catch (error) {
          console.error('Error while capturing screenshot:', error);
      }
  }
  browser.end();
});

  // Positive Test
  it('Verify that the elements of contact us page are working fine', function(browser) {
    ContactUs
      .verifyContactLink()
      .assert.visible('@contactForm')
      .submitContactForm('Demo', 'demouser@gmail.com', 'testing features', 'Checking the functionality of the Contact Us page', '/home/knoldus/Pictures/Selection_003.png')
  });

  // Negative Test
  it('Verify Submitting the Contact Us form with missing information.',function(browser){
    ContactUs
    .verifyContactLink()
    .assert.visible('@contactForm')
    .submitContactForm('Demo', '', 'testing features', 'Checking the functionality of the Contact Us page', '/home/knoldus/Pictures/Selection_003.png')
    .expect.element('@emailInput').to.have.attribute('required');
  });

});

  
// describe('Test Search Feature', () => {
//   before((browser) => {
//       browser
//       .window.maximize()
//       .url("https://www.automationexercise.com/")
    

// });

//   after(() => {
//       browser.end();
// });

  // it('Verify that the search feature is working', function(browser) {
  //       PurchaseProduct
  //     .assert.visible('@productLink')
  //     .enterProductLink()
  //     SearchFeature
  //     .clickIfAdIsVisible()
  //     .assert.visible('@searchInput')
  //     .setValue(SearchFeature.elements.searchInput, 'Women Dresses')
  //     .click(SearchFeature.elements.searchButton)
  //     .assert.containsText(SearchFeature.elements.searchResultsTitle, 'SEARCHED PRODUCTS');
  // });
  // });

  // describe('Test Purchase Product Feature', () => {
  //   before((browser) => {
  //       browser
  //       .window.maximize()
  //       .url("https://www.automationexercise.com/")
      
  
  // });
  
  //   after(() => {
  //       browser.end();
  // });
  //   it('Verify that the elements of contact us page are working fine', function(browser) {
  //     ContactUs
  //       .verifyContactLink()
  //       .assert.visible(ContactUs.elements.contactForm)
  //       .submitContactForm('Demo', 'demouser@gmail.com', 'testing features', 'Checking the functionality of the Contact Us page', '/home/knoldus/Pictures/Selection_003.png')
  //   });
  // });

// it('Verify that the user is able to purchase a product successfully', function(browser) {
//   PurchaseProduct
//     .assert.visible('@productLink')
//     .enterProductLink()
//     .expect.element('@viewProduct').to.be.visible
//     .expect.element('@modalTitle').to.be.visible
//     .expect.element('@checkoutButton').to.be.visible
//     .purchaseProduct('5');
// });

// });
