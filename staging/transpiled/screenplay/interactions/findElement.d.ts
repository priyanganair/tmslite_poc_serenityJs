import { UsesAbilities, Ability } from "serenity-js/lib/screenplay";
import { Target } from "serenity-js/lib/screenplay-protractor";
/**
 * Presence class definition for finding if an element is present
 */
export declare class FindElement implements Ability {
    private script;
    constructor(script: string);
    /**
     * Question Method to find out if an element is present
     * @param target
     * @returns {FindElement}
     */
    static of(script: string): FindElement;
    performAs(actor: UsesAbilities): PromiseLike<Target>;
}
