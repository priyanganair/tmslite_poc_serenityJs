"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
class TMSLiteLocators {
}
TMSLiteLocators.loginButton = screenplay_protractor_1.Target.the("Login button").located(protractor_1.by.xpath("//*[@id='root']//button"));
TMSLiteLocators.usernameTextbox = screenplay_protractor_1.Target.the("Username placeholder").located(protractor_1.by.xpath("//*[@id='auth0-lock-container-1']//input[@name='username']"));
TMSLiteLocators.passwordTextbox = screenplay_protractor_1.Target.the("Password placeholder").located(protractor_1.by.xpath("//*[@id='auth0-lock-container-1']//input[@name='password']"));
TMSLiteLocators.signInButton = screenplay_protractor_1.Target.the("Login Authentication field").located(protractor_1.by.xpath("//*[@id='auth0-lock-container-1']//button/span[@class='auth0-label-submit'] "));
TMSLiteLocators.actualText = screenplay_protractor_1.Target.the("Actual Text placeholer in home page").located(protractor_1.by.xpath("//*[@id='root']//h2"));
// static waybillManagmentTab= Target.the("").located(
//   by.js("argument[0].querySelector('px-app-nav').shadowRoot.querySelector('#items > px-app-nav-item:nth-child(5)').click()",null"));
TMSLiteLocators.addNewWaybill = screenplay_protractor_1.Target.the("Login button").located(protractor_1.by.xpath("//*[@id='root']//button[contains(text(),'Add New Waybill')]"));
TMSLiteLocators.loadMore = screenplay_protractor_1.Target.the("").located(protractor_1.by.xpath("//*[@id='root']/div/div/section/section/section/div/div/button"));
exports.TMSLiteLocators = TMSLiteLocators;
//# sourceMappingURL=tmslitelocators.js.map