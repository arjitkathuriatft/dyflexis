import BasePage from "./BasePage";

class CartPage extends BasePage {
  get checkoutButton() {
    return cy.get(".academy-checkout-bug");
  }

  clickCheckoutButton() {
    this.checkoutButton.click();
  }
}

export default new CartPage();
