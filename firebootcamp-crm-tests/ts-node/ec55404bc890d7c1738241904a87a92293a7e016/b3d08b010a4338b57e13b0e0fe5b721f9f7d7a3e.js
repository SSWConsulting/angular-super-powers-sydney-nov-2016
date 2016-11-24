"use strict";
var home_po_1 = require('./home.po');
var protractor_1 = require('protractor');
describe('Page: Home', function () {
    var page;
    beforeEach(function () {
        page = new home_po_1.HomePage();
    });
    it("should display home page message saying 'home works!'", function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('home works!');
    });
    it("should have button text of 'add'", function () {
        page.navigateTo();
        expect(page.getButtonText()).toEqual('Add');
    });
    it("should navigate to the 'companies page'", function () {
        page.navigateTo();
        page.clickAddButton();
        protractor_1.browser.sleep(5000);
        var title = protractor_1.element(protractor_1.by.css('h1')).getText();
        expect(title).toEqual('Companies');
    });
});
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/b3d08b010a4338b57e13b0e0fe5b721f9f7d7a3e.js.map