import BasePage from "./BasePage";

class PaymentInfoPage extends BasePage {
  get continueToPayment() {
    return cy.get(".ec_cart_button_shipping_next");
  }

  clickOnContinueToPayment() {
    this.continueToPayment.click();
  }
}
export default new PaymentInfoPage();
