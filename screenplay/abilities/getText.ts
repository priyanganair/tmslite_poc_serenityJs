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

import { Interaction, UsesAbilities, Ability } from "serenity-js/lib/screenplay";
import { BrowseTheWeb, Target, ExecuteScript } from "serenity-js/lib/screenplay-protractor";
import { browser } from "protractor";

/**
 * Presence class definition for finding if an element is present
 */
export class GetText implements Ability {

  /**
   * Question Method to find out if an element is present
   * @param target
   * @returns {FindElement}
   */
  public static of(): PromiseLike<String>  {
    return browser.executeScript("return document.querySelector('px-app-nav').shadowRoot.querySelector('#items > px-app-nav-item:nth-child(5)').shadowRoot.querySelector('p').innerHTML").then(function(text){
      console.log(" jhjgjhf " + text);
      return text;
  }) as any;
}
}
