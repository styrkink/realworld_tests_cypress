import { MainPage } from "../Pages/main.page.cy";
const mainPage = new MainPage();

describe("Filter posts by tag", () => {
  before(() => {
    mainPage.navigate();
  });

  it("Should filter posts by a tag", () => {
    mainPage.clickRandomTag();
    mainPage.verifyActiveTag();
    mainPage.verifyFilteredArticles();
  });
});
