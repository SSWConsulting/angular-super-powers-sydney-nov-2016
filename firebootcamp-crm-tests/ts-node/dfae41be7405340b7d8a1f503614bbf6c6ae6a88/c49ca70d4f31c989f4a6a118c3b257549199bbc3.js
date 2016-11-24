"use strict";
var protractor_1 = require('protractor');
var FirebootcampCrmPage = (function () {
    function FirebootcampCrmPage() {
    }
    FirebootcampCrmPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    FirebootcampCrmPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('fbc-root h1')).getText();
    };
    return FirebootcampCrmPage;
}());
exports.FirebootcampCrmPage = FirebootcampCrmPage;
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/dfae41be7405340b7d8a1f503614bbf6c6ae6a88/c49ca70d4f31c989f4a6a118c3b257549199bbc3.js.map