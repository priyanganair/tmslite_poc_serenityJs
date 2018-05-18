"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
class AirbnbLocators {
}
AirbnbLocators.landingPageSearchBoxTextField = screenplay_protractor_1.Target.the("search text box").located(protractor_1.by.xpath(".//input[@type='text']"));
AirbnbLocators.searchButton = screenplay_protractor_1.Target.the("click on search button ").located(protractor_1.by.xpath(".//button[@type='submit']"));
AirbnbLocators.searchText = screenplay_protractor_1.Target.the("").located(protractor_1.by.css("#site-content > div > div > div > div:nth-child(1)   div._cv8yzh > div > div > h3 > div > div"));
AirbnbLocators.hotelName = screenplay_protractor_1.Target.the("").located(protractor_1.by.xpath("//*[@id='listing-18597000']//div[@class='_1rths372']"));
AirbnbLocators.bookButton = screenplay_protractor_1.Target.the("").located(protractor_1.by.xpath("//*[@id='room']/div/div[2]//span[contains(text(),'Book')]"));
exports.AirbnbLocators = AirbnbLocators;
//# sourceMappingURL=airbnb.js.map