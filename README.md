# Project Guide

## Steps to run the test
1. Clone the repository to your local machine using `git clone "https://github.com/arjitkathuriatft/dyflexis.git" `
2. Navigate to the project directory 
3. `npm install`
4. `npm run test` for all tests
5. `npm run test-frontendnd` for ui tests in chrome browser headed mode
6. `npm run test-backend` for api tests in chrome browser headed mode

## Folder structure overview
1. Cypress-> e2e-> backend in this package we have api related test cases
2. Cypress-> e2e-> frontend we have UI related test cases
3. Cypress-> e2e-> config->testdata we have all the test data here for small project I have created only   test data file
4. Cypress-> e2e-> pages we have all the page object model here locators and functions
5. Cypress-> processQuestionAndAnswers -> we have process related answer

# Test Scenarios in Gherking language both positine and negative

## Feature: Home Page 
As a user, I want to verify home page functionality like sorting, pagination, adding product to cart and footer UI

### Scenario: Verifying sorting order functionality 
Given I am on the home page of the application
When I change the Sort Method from Default Sorting to "Best Rating"  
Then The products should be updated accordingly
And The count of the products remain same

### Scenario: Verify Pagination functionality
Given I am on the home page of the application
When I change the pagination view from 25 to 50 
Then The products should be updated accordingly
And The no of product should be display on the top as "Showing all x(number of) results"

### Scenario: Verify Footer functionality
Given I am on the home page of the application
Then Footer Section should be visible with 2 links i.e. Terms and Conditions, Privacy Policy
When I click on "Terms and Conditions" link
Then I should navigate to "https://www.utest.com/terms-and-conditions" on same page  
When I click on "Privacy Policy" link
Then I should navigate to "https://www.utest.com/privacy-policy" on same page  


## Feature: Shopping Cart
As a user, I want to add items in my shopping cart successfully so that I can buy it.

### Scenario: Verify Add to Cart functinality 
Given I am on the home page displaying the product catalog  
When I click the "Add to Cart" button for a product
Then I should see the green banner flash with text "Successfully Added to your shopping cart"
And I should also see the green button with text "Checkout Now"

### Scenario: Verify Checkout functionality
Given I am on the home page displaying the product catalog  
When I click on the "Checkout Button" button for a product after adding it to cart
Then I should navigate to screen "https://academybugs.com/my-cart/"
And I should see the same item available in the checkout screen with Cart Subtotal, Shipping and Grand Total
And I should see Cart Subtotal amount to be same as displayed in the home page

### Scenario:Verify Increase/Decrease functionality of number of article in the checkout screen
Given I already have items in my shopping cart  
When I click on the '+' icon 
Then The count of no of article should be increase as per my click and should be visible in the screen
When I click on the '-' icon 
Then The count of no of article should be decrease as per my click and should be visible in the screen
And I can't decrease less 1 article
When I click on 'UPDATE' button
Then The amount of the articles should be updated as per the no of article

### Scenario:Verify remove article functionality
When I click the remove 'X' button preceding the item  
Then The item should be removed from the cart  
And The price should be updated accordingly

## Feature: Billing Information
As a user, I want to provide billing information to complete my purchase.

### Scenario: Entering valid billing information
Given I am on the billing info page after successfully checkout item from cart
Then I should see the urls as "https://academybugs.com/my-cart/?ec_page=checkout_info"
And I should see Billing Information Section with Country, First Name, Last Name,Companym Address,City, State, Zip Code, Phone Number texfields
And I should also see differect section of Emailwith Email and Retype Email texfields

### Scenario Verify all the required field error message in billing info page
Given I am on the billing info page after successfully checkout item from cart
When I click on "CONTINUE TO PAYMENT" button without entering and data
Then I should see 9 error message for mandatory fields
And I should see country error message as "Please select your Country"
And I should see first name error message as "Please enter your First Name"
And I should see last name error message as "Please enter your Last Name"
And I should see address error message as "Please enter your Address"
And I should see city error message as "Please enter your City"
And I should see zip code error message as "Please enter your Zip Code"
And I should see phone number error message as "Please enter your Phone"
And I should see email error message as "Please enter a valid Email"
And I should see checkout error message as "Please correct the errors in your checkout details"

### Scenario: Verify country field and state field should be in sync
Given I am on the billing info page after successfully checkout item from cart
When I enter valid country for eg "India"
Then I should see corresponding State based on the country selected eg (28 states of India only)
 
## Feature: Shipping Information
As a user, I want to choose a shipping method for my items.

### Scenario: Verify all shipping method options available in Shipping Page
Given I am on the shipping info page after successfully checkout item from cart and added billing info  
Then I should navigate to "https://academybugs.com/my-cart/?ec_page=checkout_shipping"
Then I should see multiple shipping options
And I should see "Standard Shipping 7-10 Days
And I should see "In-Store Pickup"
And I should see "Priority 3 Day Shipping "
And I should see "Ground Delivery 5-7 Days"
And I should see "Priority 2 Day Shipping"
And I should see "Next Day Air (1 Day)
And All the options should have amount mention along with it

## Scenario Verify after selecting any shipping option teh grand total should be reflected successfully
When I select "Standard Shipping 7-10 Days"  
And I click on "Continue to payment"  
Then The Shipping cost on the order detail section should be updated accordingly  
And I should be redirected to the payment page  

## Feature: Payment
As a user, I want to choose payment method and complete my purchase.

### Scenario: Verifying by default Direct Deposite payment option selected
Given I am on the payment page  
Then I navigate to "https://academybugs.com/my-cart/?ec_page=checkout_payment"
And I should see "Pay by Direct Deposit"  selected by default 

### Scenario: Verfy pop up after submitting order
Given I am on the payment page  
When I enter invalid payment information  
And I click on "Submit order"  
Then I should see a pop up with text "Not a real order"
