import { LoginPage } from "../Pages/login.page.cy";
import { MainPage } from "../Pages/main.page.cy";
import { user } from "../helpers/helper";

const credentials = require('../fixtures/credentials.json');
const mainPage = new MainPage();
const loginPage = new LoginPage();

describe('Login test cases', () => {
    beforeEach(() => {
      mainPage.navigate();
      mainPage.clickSignInButton();
    })
    
    it('Login with valid data', () => {
      loginPage.fillSignInForm(credentials.email, credentials.password);
      loginPage.submitLoginForm();
      cy.get(mainPage.userAvatar).should("be.visible");
      cy.get(mainPage.yourFeedTab).should("be.visible");
    })

    it('Login with invalid email', () => {
      loginPage.fillSignInForm(user.email, credentials.password);
      loginPage.submitLoginForm();
      cy.url().should("include", "/login");
      cy.get(loginPage.errorMessage).should(
      "contain",
      "email or password is invalid"
    );
    })

    it('Login with invalid password', () => {
      loginPage.fillSignInForm(credentials.email, user.password);
      loginPage.submitLoginForm();
      cy.url().should("include", "/login");
      cy.get(loginPage.errorMessage).should(
      "contain",
      "email or password is invalid"
    );
    })
})