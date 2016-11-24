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
        expect(page.getButtonText()).toEqual('Add');
    });
});
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/349174ec8afb04ea5ecfa6a16b340c68832f4e0b.js.map