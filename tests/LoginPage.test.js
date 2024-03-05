let Login = browser.page.Login();

describe('LoginPage Verification', () => {
    beforeEach((browser) => {
        browser
        .window.maximize()
        .url('https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect/auth?client_id=leaderboard-ui&redirect_uri=https%3A%2F%2Fnashtechglobal.go1percent.com%2Fmy-dashboard&state=490ceda0-c395-4d8b-acc3-d41513a0aeac&response_mode=fragment&response_type=code&scope=openid&nonce=03c35f02-48cb-4332-a669-d32bb2bdaf17')

});

afterEach(async (browser) => {
  browser.end();
});

  it('Verify "Go1Percent" logo, carousel images, carousel caption and the footer message should be displayed on login page', function(browser) {
    Login
      .expect.element('@goLogo').to.be.present
    Login
      .expect.element('@oneLogo').to.be.present
    browser
      .assert.carouselImageCount(4)
      .assert.carouselCaption('.carousel-inner .item.active .carousel-caption', 'Get 1% Better Everyday')
      .assert.footerMessage('.tagsss', 'Made with at Nashtech.')
    
  });


  it('Verify carousel image changes when clicking on carousel buttons', async function (browser) {
    for (let i = 1; i <= 4; i++) {
      await Login.clickCarouselButton(i).assert.carouselImageChange('.carousel-inner .item.active img');
    }
  });


  it('Verify that specific text is present between login options on the web page', function (browser) {
    Login
        .expect.element('@emailOptionText').text.to.contain('or do it via E-mail');
  });


  it('Verify that login page heading contains text "Sign in to Go 1%"', function (browser) {
    Login.expect.element('@pageTitle').text.to.equal('Sign in to Go 1%');
  });


  it('Verify that clicking on the Microsoft logo redirects to the Microsoft login page', function (browser) {
    Login
      .clickMicrosoftLogo()
      .assert.urlContains('https://login.microsoftonline.com/');
  });


  it('Verify that login fails with invalid credentials and an alert message is displayed', function (browser) {
    Login
      .loginWithCredentials('invalid_username', 'invalid_password')
      .assert.visible('@inputError') 
      .assert.containsText('@inputError', 'Invalid username or password.');
  });


  it('Verify successful login with valid credentials', function (browser) {
    Login
      .loginWithCredentials('testemployee', 'testemployee')
  });

  it('Verify remember me checkbox is selected during login', function (browser) {
    Login
    .checkRememberMeCheckbox('invalid_username', 'invalid_password')
    .click('@loginButton')
  });

  it('Verify the forgot Password functionality', function (browser) {
    Login
      .expect.element('@forgotPasswordLink').text.to.equal('Forgot Password?')
    Login
      .checkForgotPasswordFunctionality('testUser')
    });


    it('Verify clicking on the "Terms of Use" link opens a new page with the terms of use', async function (browser) {
        Login.expect.element('@termsOfUseLink').to.be.present;
    
        const originalHandle = browser.execute(function() {
            return window.name;
        }).value;
        console.log(originalHandle);
    
        Login.clickTermsOfUseLink();
    
        const handles = await browser.window.getHandle();

        if (handles && handles.value && handles.value.length > 1) {
            const newHandles = handles.value.filter(handle => handle !== originalHandle);
    
            if (newHandles.length > 0) {
                const newHandle = newHandles[0];
    
                await browser.switchTo(newHandle);
    
                browser.assert.urlContains('/terms-of-use');
    
                await browser.switchTo(originalHandle);
            } else {
                console.error('New handle not found.');
            }
        } else {
            console.error('Unable to retrieve window handles.');
        }

        // async function switchToNextWindow(browser) {
        //     const handlesResult = await browser.windowHandles();
        
        //     if (handlesResult && handlesResult.value && handlesResult.value.length > 1) {
        //         const currentHandle = await browser.windowHandle();

        //         await browser.switchTo(handlesResult.value[1]);
        //         await browser.switchTo(currentHandle);
        //     } else {
        //         console.error('Unable to switch to the next window.');
        //     }
        // }
        
});

});




