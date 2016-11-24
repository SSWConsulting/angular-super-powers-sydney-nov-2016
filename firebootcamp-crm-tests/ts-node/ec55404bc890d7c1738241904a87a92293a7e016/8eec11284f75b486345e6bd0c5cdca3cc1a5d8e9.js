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
});
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/8eec11284f75b486345e6bd0c5cdca3cc1a5d8e9.js.map