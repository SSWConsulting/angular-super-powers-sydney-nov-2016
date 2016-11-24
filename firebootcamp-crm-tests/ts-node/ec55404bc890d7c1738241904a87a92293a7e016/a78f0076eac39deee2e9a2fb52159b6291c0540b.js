"use strict";
var protractor_1 = require('protractor');
var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/home');
    };
    HomePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('fbc-home p')).getText();
    };
    HomePage.prototype.getButtonText = function () {
        return protractor_1.element(protractor_1.by.css('fbc-home .test-css-class')).getText();
    };
    HomePage.prototype.clickAddButton = function () {
        protractor_1.element(protractor_1.by.css('fbc-home .test-css-class')).click();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/a78f0076eac39deee2e9a2fb52159b6291c0540b.js.map