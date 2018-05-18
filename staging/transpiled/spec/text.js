"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a string containing a comma-separated list of values
 * to a list of values
 *
 * @param commaSeparatedValues
 * @return {string[]}
 */
function listOf(commaSeparatedValues) {
    return commaSeparatedValues.split(",").map(i => i.trim());
}
exports.listOf = listOf;
//# sourceMappingURL=text.js.map