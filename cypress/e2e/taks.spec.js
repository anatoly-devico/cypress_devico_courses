// Homework 14.07:
// create authentication.spec.js and automate following tests:
// 1. should show typeable Username field
// 2. should show typeable Password field
// 3. should show Username and Password placeholders
// 4. should show 'Username is required' error if user clicks on it and then click outside this field and didn't enter any value
// 5. check "Remember me" checkbox
// 6. should show enabled by default sign in btn
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

// homework 4.8 - create transaction_view.spec.js and automate following tests:
// 1. transactions navigation tabs should be hidden on a transaction view page
// 2. User should be able to like a transaction
// 3. User should be able to comment on a transaction
// 4. User should be able to accept a transaction request
// 5. User should be able to reject a transaction request
// 6. Accept/reject buttons shouldn't exist on completed request

// homework 9.8 - create user_settings.spec.js and automate following tests:
// 1. Should render the user settings form
// 2. Should display user setting form errors
// 3. User should be able to update all settings in once
// 4. User should be able to update first name
// 5. User should be able to update last name
// 6. User should be able to update email
// 7. User should be able to update phone number


// homework 11.8 - create following API functions and put them to cypress commands.js file
// 1. sign_up_API
// 2. log_in_API
// 3. logout_API
// Refactor your tests using these functions