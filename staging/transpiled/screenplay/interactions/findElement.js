"use strict";
/*
 * @license
 * Copyright (c) 2017 by General Electric Company. All rights reserved.
 *
 *   The copyright to the computer software herein is the property of
 *   General Electric Company. The software may be used and/or copied only
 *   with the written permission of General Electric Company or in accordance
 *   with the terms and conditions stipulated in the agreement/contract
 *   under which the software has been supplied.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
/**
 * Presence class definition for finding if an element is present
 */
class FindElement {
    constructor(script) {
        this.script = script;
    }
    /**
     * Question Method to find out if an element is present
     * @param target
     * @returns {FindElement}
     */
    static of(script) {
        return new FindElement(script);
    }
    performAs(actor) {
        return screenplay_protractor_1.BrowseTheWeb.as(actor).executeScript(this.script).then(function (target) {
            console.log(target);
            return target;
        });
    }
}
exports.FindElement = FindElement;
//# sourceMappingURL=findElement.js.map