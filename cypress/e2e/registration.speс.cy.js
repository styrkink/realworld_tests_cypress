import { MainPage } from "../Pages/main.page.cy";
import { RegistrationPage } from "../Pages/registration.page.cy";
import { user } from "../helpers/helper";

const mainPage = new MainPage();
const registrationPage = new RegistrationPage();

describe("Registration test cases", () => {
  beforeEach(() => {
    mainPage.navigate();
    mainPage.clickSignUpButton();
  });

  it("Sign up with valid data", () => {
    registrationPage.fillSignUpForm(user);
    registrationPage.submitRegisterForm();
    cy.get(mainPage.userAvatar).should("be.visible");
    cy.get(mainPage.yourFeedTab).should("be.visible");
  });

  it("Sign up with empty Username field", () => {
    registrationPage.fillSignUpForm(user);
    cy.get(registrationPage.userNameField).clear();
    registrationPage.submitRegisterForm();
    cy.url().should("include", "/register");
    cy.get(registrationPage.errorMessage).should(
      "contain",
      "username can't be blank"
    );
  });

  it("Sign up with empty Email field", () => {
    registrationPage.fillSignUpForm(user);
    cy.get(registrationPage.emailField).clear();
    registrationPage.submitRegisterForm();
    cy.url().should("include", "/register");
    cy.get(registrationPage.errorMessage, { timeout: 10000 }).should(
      "contain",
      "email can't be blank"
    );
  });

  it("Sign up with empty Password field", () => {
    registrationPage.fillSignUpForm(user);
    cy.get(registrationPage.passwordField).clear();
    registrationPage.submitRegisterForm();
    cy.url().should("include", "/register");
    cy.get(registrationPage.errorMessage, { timeout: 10000 }).should(
      "contain",
      "password can't be blank"
    );
  });
});
