"use strict";
const protractor_1 = require("serenity-js/protractor");
const startApplication_task_1 = require("../../screenplay/tasks/startApplication.task");
module.exports = function todoUserSteps() {
    this.setDefaultTimeout(30 * 1000); // The todomvc.com website can sometimes be a bit slow to load, so we tell
    // Cucumber to give it up to 30 seconds to get ready.
    let actor;
    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (actorName, items, callback) {
        console.log("Hello first");
        console.log(startApplication_task_1.Start);
        actor = protractor_1.Actor.named("James");
        callback();
    });
    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName, callback) {
        callback(null, "pending");
    });
    this.Then(/^.* todo list should contain (.*?)$/, function (items, callback) {
        callback(null, "pending");
    });
};
//# sourceMappingURL=todo_user.step.js.map