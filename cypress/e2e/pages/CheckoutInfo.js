import BasePage from "./BasePage";
const testData = require("../config/testData");

class CheckoutInfoPage extends BasePage {
  get billingCountrySelect() {
    return cy.get("#ec_cart_billing_country");
  }

  get billingFirstNameInput() {
    return cy.get("#ec_cart_billing_first_name");
  }

  get billingLastNameInput() {
    return cy.get("#ec_cart_billing_last_name");
  }

  get billingCompanyNameInput() {
    return cy.get("#ec_cart_billing_company_name");
  }

  get billingAddressInput() {
    return cy.get("#ec_cart_billing_address");
  }

  get billingCityInput() {
    return cy.get("#ec_cart_billing_city");
  }
  get billingStateSelect() {
    return cy.get("#ec_cart_billing_state_IN");
  }

  get billingZipInput() {
    return cy.get("#ec_cart_billing_zip");
  }

  get billingPhoneInput() {
    return cy.get("#ec_cart_billing_phone");
  }

  get emailInput() {
    return cy.get("#ec_contact_email");
  }

  get retypeEmailInput() {
    return cy.get("#ec_contact_email_retype");
  }

  get continueToShippingButton() {
    return cy.get(".ec_checkout_details_submit");
  }

  get getCountryErrorMessage() {
    return cy.get("#ec_cart_billing_country_error");
  }

  get getFirstNameErrorMessage() {
    return cy.get("#ec_cart_billing_first_name_error");
  }

  get getLastNameErrorMessage() {
    return cy.get("#ec_cart_billing_last_name_error");
  }

  get getAddressErrorMessage() {
    return cy.get("#ec_cart_billing_address_error");
  }

  get getCityErrorMessage() {
    return cy.get("#ec_cart_billing_city_error");
  }

  get getZipCodeErrorMessage() {
    return cy.get("#ec_cart_billing_zip_error");
  }

  get getPhoneNumberErrorMessage() {
    return cy.get("#ec_cart_billing_phone_error");
  }

  get getEmailErrorMessage() {
    return cy.get("#ec_contact_email_error");
  }

  get getCheckoutErrorMessage() {
    return cy.get("#ec_checkout2_error");
  }

  fillBillingInfo() {
    this.billingCountrySelect.select(testData.billingaddress.country);
    this.billingFirstNameInput.type(testData.billingaddress.firstName);
    this.billingLastNameInput.type(testData.billingaddress.lastName);
    this.billingCompanyNameInput.type(testData.billingaddress.companyName);
    this.billingAddressInput.type(testData.billingaddress.address);
    this.billingCityInput.type(testData.billingaddress.city);
    this.billingStateSelect.select(testData.billingaddress.state);
    this.billingZipInput.type(testData.billingaddress.zip);
    this.billingPhoneInput.type(testData.billingaddress.phone);
    this.emailInput.type(testData.billingaddress.email);
    this.retypeEmailInput.type(testData.billingaddress.email);
  }

  clickOnCheckout() {
    this.continueToShippingButton.eq(0).click();
  }

  verifyAllErrorMessages() {
    this.getCountryErrorMessage.should(
      "contain.text",
      testData.errormessage.countryErrorMessage
    );
    this.getFirstNameErrorMessage.should(
      "contain.text",
      testData.errormessage.firstNameErrorMessage
    );
    this.getLastNameErrorMessage.should(
      "contain.text",
      testData.errormessage.lastNameErrorMessage
    );
    this.getAddressErrorMessage.should(
      "contain.text",
      testData.errormessage.addressErrorMessage
    );
    this.getCityErrorMessage.should(
      "contain.text",
      testData.errormessage.cityErrorMessage
    );
    this.getZipCodeErrorMessage.should(
      "contain.text",
      testData.errormessage.zipCodeErrorMessage
    );
    this.getPhoneNumberErrorMessage.should(
      "contain.text",
      testData.errormessage.phoneErrorMessage
    );
    this.getEmailErrorMessage.should(
      "contain.text",
      testData.errormessage.emailErrrorMessage
    );
    this.getCheckoutErrorMessage.should(
      "contain.text",
      testData.errormessage.checkoutErrorMessage
    );
  }
}

export default new CheckoutInfoPage();
