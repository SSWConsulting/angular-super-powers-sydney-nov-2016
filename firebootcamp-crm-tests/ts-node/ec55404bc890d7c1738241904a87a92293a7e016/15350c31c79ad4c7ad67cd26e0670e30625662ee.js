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
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=/Users/duncanhunter/firebootcamp/crm-super-powers-tour/angular-super-powers/firebootcamp-crm-tests/ts-node/ec55404bc890d7c1738241904a87a92293a7e016/15350c31c79ad4c7ad67cd26e0670e30625662ee.js.map