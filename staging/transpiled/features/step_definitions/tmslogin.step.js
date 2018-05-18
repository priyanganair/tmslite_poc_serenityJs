"use strict";
const protractor_1 = require("serenity-js/protractor");
const protractor_2 = require("protractor");
const serenity_js_1 = require("serenity-js");
const serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const startApplication_task_1 = require("../../screenplay/tasks/startApplication.task");
const expect_1 = require("../../spec/expect");
const tmslitelocators_1 = require("../../screenplay/locators/tmslitelocators");
module.exports = function tmslogin() {
    this.setDefaultTimeout(30 * 1000);
    const actor = protractor_1.Actor.named("admin").whoCan(protractor_1.BrowseTheWeb.using(protractor_2.protractor.browser));
    const stage = serenity_js_1.serenity.callToStageFor({
        actor: name => protractor_1.Actor.named("admin").whoCan(protractor_1.BrowseTheWeb.using(protractor_2.protractor.browser)),
    });
    this.Given(/^tmslite application is open$/, function () {
        return stage.theActorCalled("admin").attemptsTo(startApplication_task_1.Start.openApplication());
    });
    this.When(/^user clicks on the login button$/, function () {
        return stage.theActorInTheSpotlight().attemptsTo(serenity_protractor_1.Click.on(tmslitelocators_1.TMSLiteLocators.loginButton), screenplay_protractor_1.Wait.for(screenplay_protractor_1.Duration.ofSeconds(3)));
    });
    this.When(/^valid (.*) and (.*) is provided$/, function (username, password) {
        return stage.theActorInTheSpotlight().attemptsTo(serenity_protractor_1.Enter.theValue(username).into(tmslitelocators_1.TMSLiteLocators.usernameTextbox), serenity_protractor_1.Enter.theValue(password).into(tmslitelocators_1.TMSLiteLocators.passwordTextbox));
    });
    this.When(/^clicks on the signin button$/, function () {
        return stage.theActorInTheSpotlight().attemptsTo(serenity_protractor_1.Click.on(tmslitelocators_1.TMSLiteLocators.signInButton), screenplay_protractor_1.Wait.for(screenplay_protractor_1.Duration.ofSeconds(10)));
    });
    this.Then(/^(.*) is displayed on the home page$/, function (expectedText) {
        return expect_1.expect(actor.toSee(serenity_protractor_1.Text.of(tmslitelocators_1.TMSLiteLocators.actualText))).to.eventually.equal(expectedText);
    });
};
//# sourceMappingURL=tmslogin.step.js.map