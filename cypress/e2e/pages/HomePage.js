import BasePage from "./BasePage";
const testData = require("../config/testData");

class HomePage extends BasePage {
  get title() {
    return cy.get(".sq-site-title>a");
  }
  get headerList() {
    return cy.get("#menu-primary-menu>li");
  }
  get getProductList() {
    return cy.get("#ec_store_product_list>li");
  }

  get sortOrder() {
    return cy.get("#sortfield");
  }

  open() {
    return super.open(testData.urls.homePage);
  }

  verifyTitleText() {
    this.title.should("be.visible");
    this.title.should("have.text", "AcademyBugs.com");
  }

  verifyHeaderList() {
    this.headerList.should("have.length", 5);
  }

  verifyAllProductList() {
    this.getProductList.each(($element) => {
      cy.wrap($element).should("be.visible");
      expect($element.find("h3.ec_product_title_type1").text().trim()).not.to.be
        .empty;
    });
  }

  selectAndVerifySortOrder(sortOrder) {
    this.sortOrder.select(sortOrder);
    cy.url().should("include", "/?filternum");
    this.sortOrder.should("contain", "Best Rating").and("be.visible");
    this.getProductList.should("have.length", 18);
  }

  addToCheckout() {
    this.getProductList.eq(0).find('a[id^="ec_add_to_cart_"]').eq(1).click();
    this.getProductList.eq(0).find(".ec_added_to_cart_button").eq(1).click();
  }
}

export default new HomePage();
