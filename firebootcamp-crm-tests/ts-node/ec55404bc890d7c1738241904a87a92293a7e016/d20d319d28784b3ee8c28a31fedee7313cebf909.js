"use strict";
var home_po_1 = require('./home.po');
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
        expect(page.getButtonText()).toEqual('add');
    });
});
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/d20d319d28784b3ee8c28a31fedee7313cebf909.js.map