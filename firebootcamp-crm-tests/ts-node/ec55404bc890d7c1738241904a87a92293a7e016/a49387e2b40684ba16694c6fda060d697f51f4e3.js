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
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/a49387e2b40684ba16694c6fda060d697f51f4e3.js.map