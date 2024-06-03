class BasePage {
  constructor() {}

  open(path) {
    return cy.visit(path);
  }
}
export default BasePage;
