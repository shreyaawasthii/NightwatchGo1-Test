module.exports = {
  elements: {
    header: '#header',
    homeLink: {
      selector: '//a[contains(@href, "/") and contains(text(), "Home")]',
      locateStrategy: 'xpath',
    },
    navBar: '.nav.navbar-nav',
  },
};