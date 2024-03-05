let Login = browser.page.Login();
let Dashboard = browser.page.Dashboard();

describe('LoginPage Verification', () => {
    before((browser) => {
        browser
        .window.maximize()
        .url('https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect/auth?client_id=leaderboard-ui&redirect_uri=https%3A%2F%2Fnashtechglobal.go1percent.com%2Fmy-dashboard&state=490ceda0-c395-4d8b-acc3-d41513a0aeac&response_mode=fragment&response_type=code&scope=openid&nonce=03c35f02-48cb-4332-a669-d32bb2bdaf17')

});

after(async (browser) => {
  browser.end();
});

  it('Verify successful login with valid credentials', function (browser) {
    Login
      .loginWithCredentials('testemployee', 'testemployee')
  });

  it('Verify user should be able to see the all the activities on the My activity ', function (browser) {
    Dashboard
    .waitForElementVisible('@settings',5000)
    .click('@settings')
    .waitForElementVisible('@profile')
    .click('@profile', browser)
    .waitForElementVisible('@myActivity', browser)

    browser.expect.element('@myActivity').to.be.visible;

  });

});





