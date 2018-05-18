"use strict";
const protractor_1 = require("serenity-js/protractor");
const protractor_2 = require("protractor");
const serenity_js_1 = require("serenity-js");
const serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const tmslitelogin_task_1 = require("../../screenplay/tasks/tmslitelogin.task");
const tmslitelocators_1 = require("../../screenplay/locators/tmslitelocators");
module.exports = function tmswaybill() {
    this.setDefaultTimeout(30 * 1000);
    const actor = protractor_1.Actor.named("admin").whoCan(protractor_1.BrowseTheWeb.using(protractor_2.protractor.browser));
    const stage = serenity_js_1.serenity.callToStageFor({
        actor: name => protractor_1.Actor.named("admin").whoCan(protractor_1.BrowseTheWeb.using(protractor_2.protractor.browser)),
    });
    this.When(/^user login with valid (.*) and (.*)$/, function (username, password) {
        return stage.theActorInTheSpotlight().attemptsTo(tmslitelogin_task_1.Login.toApplication(username, password));
    });
    this.When(/^clicks on the waybill managament tab$/, function () {
        return stage.theActorInTheSpotlight().attemptsTo(screenplay_protractor_1.Wait.for(screenplay_protractor_1.Duration.ofSeconds(3)), serenity_protractor_1.Click.on(tmslitelocators_1.TMSLiteLocators.addNewWaybill), screenplay_protractor_1.Wait.for(screenplay_protractor_1.Duration.ofSeconds(3)), screenplay_protractor_1.Execute.script("document.querySelector('px-modal').shadowRoot.querySelector('#accept-trigger-button').click()"));
    });
    this.When(/^clicks on the Add New Waybill button$/, function () {
        return stage.theActorInTheSpotlight().attemptsTo();
    });
    this.Then(/^user can click on Ok button$/, function () {
        return stage.theActorInTheSpotlight().attemptsTo(screenplay_protractor_1.Execute.script("document.querySelector('px-app-nav').shadowRoot.querySelector('#items > px-app-nav-item:nth-child(2)').click()"));
    });
};
//# sourceMappingURL=tmswaybill.step.js.map