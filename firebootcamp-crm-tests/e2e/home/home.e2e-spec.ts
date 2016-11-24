import { HomePage } from './home.po';
import { browser, element, by } from 'protractor';

describe('Page: Home', function () {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it(`should display home page message saying 'home works!'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
  });

  it(`should have button text of 'add'`, () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('Add');
  });

  it(`should navigate to the 'companies page'`, () => {
    page.navigateTo();
    page.clickAddButton();
    browser.sleep(5000);
    const title = element(by.css('h1')).getText();
    expect(title).toEqual('Companies');
  });
});
