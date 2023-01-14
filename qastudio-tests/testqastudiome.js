describe('Тестирование функционал покупки товара', function () {
    it('1.1)Позитивный тест на валидный логин и пароль', function () {
      cy.visit('https://testqastudio.me//');
      cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click().click();
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
      cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
      cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      cy.wait(3000);
      cy.get('.checkout').click();
      cy.get('#billing_first_name').type('Ron');
      cy.get('#billing_last_name').type('Onidzuka');
      cy.get('#billing_address_1').type('Taganskaya 6');
      cy.get('#billing_city').type('Moscow');
      cy.get('#billing_state').type('Moscow Oblast');
      cy.get('#billing_postcode').type('144055');
      cy.get('#billing_phone').type('89104008742');
      cy.get('#billing_email').type('roninron22@gmail.com');
      cy.get('#place_order').click();
     }) 
    })