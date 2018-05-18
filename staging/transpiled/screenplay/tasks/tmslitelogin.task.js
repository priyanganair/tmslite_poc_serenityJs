"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const tmslitelocators_1 = require("../../screenplay/locators/tmslitelocators");
class Login {
    /**
    * Constructor call for the class
    */
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    static toApplication(username, password) {
        return new Login(username, password);
    }
    performAs(actor) {
        return actor.attemptsTo(serenity_protractor_1.Click.on(tmslitelocators_1.TMSLiteLocators.loginButton), screenplay_protractor_1.Wait.for(screenplay_protractor_1.Duration.ofSeconds(3)), serenity_protractor_1.Enter.theValue(this.username).into(tmslitelocators_1.TMSLiteLocators.usernameTextbox), serenity_protractor_1.Enter.theValue(this.password).into(tmslitelocators_1.TMSLiteLocators.passwordTextbox), serenity_protractor_1.Click.on(tmslitelocators_1.TMSLiteLocators.signInButton), screenplay_protractor_1.Wait.for(screenplay_protractor_1.Duration.ofSeconds(10)), screenplay_protractor_1.Execute.script("document.querySelector('px-app-nav').shadowRoot.querySelector('#items > px-app-nav-item:nth-child(5)').click()"), screenplay_protractor_1.Wait.for(screenplay_protractor_1.Duration.ofSeconds(3)));
    }
}
__decorate([
    screenplay_protractor_1.step("actor login in to the application"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Login.prototype, "performAs", null);
exports.Login = Login;
//# sourceMappingURL=tmslitelogin.task.js.map