"use strict";
var app_po_1 = require('./app.po');
describe('firebootcamp-crm App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.FirebootcampCrmPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('home works!');
    });
});
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/9af04b95dcf6e02cbe8726d1b64c5630f49f43a8/0b9f6e4ca70d945267a1d695fc2631fbfa10e080.js.map