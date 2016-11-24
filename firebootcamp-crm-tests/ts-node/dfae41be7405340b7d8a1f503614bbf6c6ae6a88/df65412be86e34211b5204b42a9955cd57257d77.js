"use strict";
var app_po_1 = require('./app.po');
describe('firebootcamp-crm App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.FirebootcampCrmPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('fbc works!');
    });
});
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/dfae41be7405340b7d8a1f503614bbf6c6ae6a88/df65412be86e34211b5204b42a9955cd57257d77.js.map