"use strict";
var protractor_1 = require('protractor');
var FirebootcampCrmPage = (function () {
    function FirebootcampCrmPage() {
    }
    FirebootcampCrmPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    FirebootcampCrmPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('fbc-root p')).getText();
    };
    return FirebootcampCrmPage;
}());
exports.FirebootcampCrmPage = FirebootcampCrmPage;
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/9af04b95dcf6e02cbe8726d1b64c5630f49f43a8/a49387e2b40684ba16694c6fda060d697f51f4e3.js.map