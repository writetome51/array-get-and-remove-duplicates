"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var array_get_duplicates_1 = require("@writetome51/array-get-duplicates");
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
// Removes and returns every extra instance of each array item.
function getAndRemoveDuplicates(array) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(array);
    var duplicates = array_get_duplicates_1.getDuplicates(array);
    if (isEmpty_notEmpty_1.notEmpty(duplicates)) {
        // Remove duplicates starting from the end:
        array.reverse();
        array_remove_all_of_first_of_1.removeFirstOfEach(duplicates, array);
        array.reverse();
    }
    return duplicates;
}
exports.getAndRemoveDuplicates = getAndRemoveDuplicates;
