import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.css('fbc-home p')).getText();
  }

    getButtonText() {
    return element(by.css('fbc-home .test-css-class')).getText();
  }

   clickAddButton() {
     element(by.css('fbc-home .test-css-class')).click();
   }
}
