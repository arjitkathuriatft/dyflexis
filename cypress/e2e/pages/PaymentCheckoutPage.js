import BasePage from "./BasePage";

class PaymentCheckoutPage extends BasePage {
  get submiitOrdert() {
    return cy.get("#ec_cart_submit_order");
  }

  get popUPText() {
    return cy.get(".active.custom-position h5");
  }

  clickOnSubmitOrder() {
    this.submiitOrdert.click();
  }

  verifyFinalMessage() {
    this.popUPText.should("have.text", "Not a real order");
  }
}

export default new PaymentCheckoutPage();
