"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
class AirbnbLocators {
}
AirbnbLocators.landingPageSearchBoxTextField = screenplay_protractor_1.Target.the("search text box").located(protractor_1.by.xpath(".//input[@type='text']"));
AirbnbLocators.searchButton = screenplay_protractor_1.Target.the("click on search button ").located(protractor_1.by.xpath(".//button[@type='submit']"));
exports.AirbnbLocators = AirbnbLocators;
//# sourceMappingURL=airbnb.locators.js.map