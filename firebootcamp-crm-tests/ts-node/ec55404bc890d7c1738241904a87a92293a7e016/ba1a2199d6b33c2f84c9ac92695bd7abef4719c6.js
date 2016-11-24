"use strict";
var app_po_1 = require('./app.po');
describe('firebootcamp-crm App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.FirebootcampCrmPage();
    });
    it("should display home page message saying 'home works!'", function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('home works!');
    });
});
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/ba1a2199d6b33c2f84c9ac92695bd7abef4719c6.js.map