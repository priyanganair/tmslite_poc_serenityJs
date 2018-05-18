//
//import { Actor, BrowseTheWeb } from "serenity-js/protractor";
//
//import { protractor } from "protractor";
//
//import { serenity } from "serenity-js";
//import { Text, Enter, Click } from "serenity-js/lib/serenity-protractor";
//import { Duration, Is, Scroll, step, Wait } from "serenity-js/lib/screenplay-protractor";
//import { Start } from "../../screenplay/tasks/startApplication.task";
//import { expect } from "../../spec/expect";
//import { AirbnbLocators } from "../../screenplay/locators/airbnb";
//export = function airbnb() {
//
//  this.setDefaultTimeout(30 * 1000);
//
//  const actor = Actor.named("admin").whoCan(BrowseTheWeb.using(protractor.browser));
//
//  const stage = serenity.callToStageFor({
//    actor: name => Actor.named("admin").whoCan(BrowseTheWeb.using(protractor.browser)),
//  });
//
//  this.Given(/^airbnb application is open$/, function () {
//    return stage.theActorCalled("admin").attemptsTo(
//      Start.openApplication(),
//    );
//  });
//
//  this.When(/^(.*) is looked$/, function (searchPlace: string) {
//    return stage.theActorInTheSpotlight().attemptsTo(
//      Enter.theValue(searchPlace).into(AirbnbLocators.landingPageSearchBoxTextField),
//      Click.on(AirbnbLocators.searchButton),
//      Wait.for(Duration.ofSeconds(5)));
//  });
//
//  this.Then(/^(.*) is displayed on the search result page$/, function (expectedText: string) {
//    return expect(actor.toSee(Text.of(AirbnbLocators.searchText))).to.eventually.equal(expectedText);
//  });
//
//  this.When(/^a hotel is selected$/, function () {
//    return stage.theActorInTheSpotlight().attemptsTo(Scroll.to(AirbnbLocators.hotelName),
//      Click.on(AirbnbLocators.hotelName),
//      Wait.for(Duration.ofSeconds(10)));
//  });
//
//  this.Then(/^user should be able to see the (.*) button$/, function (bookButtonText: string) {
//    return expect(actor.toSee(Text.of(AirbnbLocators.bookButton))).to.eventually.equal(bookButtonText);
//  });
//};
//# sourceMappingURL=airbnb.step.js.map