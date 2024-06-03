import BasePage from "../pages/BasePage";
import homePage from "../pages/HomePage";
import paymentCheckoutPage from "../pages/PaymentCheckoutPage";
import cartPage from "../pages/CartPage";
import checkoutInfoPage from "../pages/CheckoutInfo";
import paymentInfoPage from "../pages/PaymentInfoPage";

describe("Should have essential components and functionalities", () => {
  let basePage;

  before(() => {
    basePage = new BasePage();
  });

  // ----------------Positive Test Cases-------------------

  it("should have header title and header list visible on the page", () => {
    homePage.open();
    homePage.verifyTitleText();
    homePage.verifyHeaderList();
  });

  it("should have  title, amount, add to cart button visible for each product", () => {
    homePage.open();
    homePage.verifyAllProductList();
  });

  it("should be able to sort the order and verify the size of the product remain same", () => {
    homePage.open();
    homePage.selectAndVerifySortOrder('Best Rating')
  });

  it("should be able to buy checkout payment fill billing address and buy the product", () => {
    homePage.open();
    homePage.addToCheckout()
    cartPage.clickCheckoutButton();
    checkoutInfoPage.fillBillingInfo()
    checkoutInfoPage.clickOnCheckout()
    paymentInfoPage.clickOnContinueToPayment()
    paymentCheckoutPage.clickOnSubmitOrder()
    paymentCheckoutPage.verifyFinalMessage()

  });

  // ----------------Negative Test Cases-------------------

  it("should be able to verify error messages in the billing page", () => {
    homePage.open();
    homePage.addToCheckout();
    cartPage.clickCheckoutButton();
    checkoutInfoPage.clickOnCheckout();
    checkoutInfoPage.verifyAllErrorMessages();
  });
});
