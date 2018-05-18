import { Actor, BrowseTheWeb } from "serenity-js/protractor";

import { protractor } from "protractor";

import { serenity } from "serenity-js";
import { Text, Enter, Click } from "serenity-js/lib/serenity-protractor";
import { Duration, Is, Scroll, step, Wait} from "serenity-js/lib/screenplay-protractor";
import { Start } from "../../screenplay/tasks/startApplication.task";
import { expect } from "../../spec/expect";
import { TMSLiteLocators } from "../../screenplay/locators/tmslitelocators";

export = function tmslogin() {

    this.setDefaultTimeout(30 * 1000);

    const actor = Actor.named("admin").whoCan(BrowseTheWeb.using(protractor.browser));

    const stage = serenity.callToStageFor({
        actor: name => Actor.named("admin").whoCan(BrowseTheWeb.using(protractor.browser)),
    });

    this.Given(/^tmslite application is open$/, function () {
        return stage.theActorCalled("admin").attemptsTo(
            Start.openApplication());
    });

    this.When(/^user clicks on the login button$/, function () {
        return stage.theActorInTheSpotlight().attemptsTo(
            Click.on(TMSLiteLocators.loginButton),
            Wait.for(Duration.ofSeconds(3)));
    });

    this.When(/^valid (.*) and (.*) is provided$/, function (username: string, password: string) {
        return stage.theActorInTheSpotlight().attemptsTo(
            Enter.theValue(username).into(TMSLiteLocators.usernameTextbox),
            Enter.theValue(password).into(TMSLiteLocators.passwordTextbox));
    });

    this.When(/^clicks on the signin button$/, function () {
        return stage.theActorInTheSpotlight().attemptsTo(
            Click.on(TMSLiteLocators.signInButton),
            Wait.for(Duration.ofSeconds(10)));
    });

    this.Then(/^(.*) is displayed on the home page$/, function (expectedText: string) {
        return expect(actor.toSee(Text.of(TMSLiteLocators.actualText))).to.eventually.equal(expectedText);
    });
};
