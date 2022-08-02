import {main_page} from "../selectors/main_page";
import {sign_up_page} from "../selectors/sign_up_page";
import {sign_in_page} from "../selectors/sign_in_page";

const userName = sign_up_page.generateUsername();
const password = 'RestTest1!'
let cookie_global;

describe('UI tests for sign in page', () => {

  before(() => {
    cy.visit('/')
  })
  beforeEach(() => {
    cy.intercept("POST", "/users").as("signup");
  })

  it('should show "Real World App logo"', () => {
    cy.get(sign_in_page.logo_image).should('be.visible').and('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
  })

  it('should show "Sign in" title', () => {
    cy.get(sign_in_page.title_text).should('be.visible').and('have.text', 'Sign in')
  })

  it("should allow user to sign up", () => {
    cy.signup_ui(userName, password);
  });

  it("should allow user to sign in to newly created account with valid credentials", () => {
    cy.signin_ui(userName, password);
    cy.getCookie("connect.sid").then((cookie) => {
      cookie_global = cookie;
    });
    cy.get(main_page.getStarted_window)
      .should("be.visible")
      .and("contain.text", "Get Started with Real World App");
  });

  it("should allow user to complete onboarding flow", () => {
    cy.setCookie(cookie_global.name, cookie_global.value);
    cy.onboarding_ui();
  });
})

// Homework 14.07:
// create authentication.spec.js and automate following tests:
// 1. should show typeable Username field
// 2. should show typeable Password field
// 3. should show Username and Password placeholders
// 4. should show 'Username is required' error if user clicks on it and then click outside this field and didn't enter any value
// 5. check "Remember me" checkbox
// 6. should show disabled by default sign in btn
// 7. should have 'Don't have an account? Sign Up' clickable link under 'Sign in' btn
// 8. should show Cypress copyright link that leads to 'https://www.cypress.io/'


// Homework 19.07:
// automate following tests in authentication.spec.js:
// 1. should allow a visitor to sign-up
// 2. should allow a visitor to login
// 3. should allow a visitor to logout

// Homework 21.07
// automate following tests in authentication.spec.js:
// 1. should display login errors
// 2. should display signup errors
// 3. should error for an invalid user
// 4. should error for an invalid password for existing user
// create new spec (bank_accounts.spec.js) and automate following tests:
// 1. creates a new bank account
// 2. should display bank account form errors
// 3. user should be able to delete a bank account
// + create Cypress custom command for user ui_sign_up, ui_login, ui_logout, ui_onboarding

// homework 26.7:
// create new_transaction.spec.js and automate following tests:
// 1. navigates to the new transaction form, selects a user and submits a transaction payment
// 2. navigates to the new transaction form, selects a user and submits a transaction request"
// 3. displays new transaction errors
// 4. submits a transaction payment and verifies the deposit for the receiver
// 5. submits a transaction request and accepts the request for the receiver
// 6. searches for a user by attribute

// homework 2.8 - create notifications.spec.js [notifications from user interactions] and automate following tests:
// 1. When user A likes a transaction of user B, user B should get notification that user A liked transaction
// 2. When user C likes a transaction between user A and user B, user A and user B should get notifications that user C liked transaction
// 3. When user A comments on a transaction of user B, user B should get notification that User A commented on their transaction
// 4. When user C comments on a transaction between user A and user B, user A and B should get notifications that user C commented on their transaction
// 5. When user A sends a payment to user B, user B should be notified of payment
// 6. When user A sends a payment request to user C, user C should be notified of request from user A