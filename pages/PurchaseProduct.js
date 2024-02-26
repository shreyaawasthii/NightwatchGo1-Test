module.exports = {
    elements: {
      productLink: 'a[href*="/products"]',
      viewProduct: {
        selector: '(//a[contains(text(), "View Product")])[4]',
        locateStrategy: 'xpath',
      },
      quantityInput: '#quantity',
      addToCartButton: '.btn.btn-default.cart',
      modalTitle: '.modal-title.w-100',
      viewCartButton: '.modal-body a[href="/view_cart"]',
      checkoutButton: '.btn.btn-default.check_out',
    },
    commands:[{
      enterProductLink(){
        return this
        .click('@productLink')
      },
      purchaseProduct(quantity) {
        return this
        .setValue('@quantityInput', quantity)
        .click('@addToCartButton')
        .waitForElementPresent('@modalTitle')
        .click('@viewCartButton')
        .click('@checkoutButton');
        
      },
    }],
  };