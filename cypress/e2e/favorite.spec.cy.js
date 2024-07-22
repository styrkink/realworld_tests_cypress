import { MainPage } from "../Pages/main.page.cy";
import { LoginPage } from "../Pages/login.page.cy";
import { ProfilePage } from "../Pages/profile.page.cy";
const credentials = require('../fixtures/credentials.json');

const mainPage = new MainPage();
const loginPage = new LoginPage();
const profilePage = new ProfilePage();

describe('Favorite functionality test cases', () => {
    beforeEach(() => {
      mainPage.navigate();
    })

    it('Add to favorite article as unauthorised user', () => {
      mainPage.addToFavorite();
      cy.url().should("include", "/register");
    })

    it('Add to favorite article as authorised user', () => {
      mainPage.clickSignInButton();
      loginPage.fillSignInForm(credentials.email, credentials.password);
      loginPage.submitLoginForm();
      mainPage.openGlobalFeedTab();
      mainPage.addToFavorite();
      mainPage.goToProfile();
      profilePage.openFavoriteTab();
      cy.get(profilePage.articlePreview).should('be.visible');
    })
    

})