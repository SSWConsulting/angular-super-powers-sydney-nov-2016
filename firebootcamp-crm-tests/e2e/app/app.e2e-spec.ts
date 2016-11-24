import { FirebootcampCrmPage } from './app.po';

describe('firebootcamp-crm App', function() {
  let page: FirebootcampCrmPage;

  beforeEach(() => {
    page = new FirebootcampCrmPage();
  });

  it(`should display home page message saying 'home works!'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
  });
});
