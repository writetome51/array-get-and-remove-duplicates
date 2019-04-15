"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var array_get_duplicates_1 = require("@writetome51/array-get-duplicates");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
// Removes and returns every extra instance of each array item.
function getAndRemoveDuplicates(array) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(array);
    var duplicates = array_get_duplicates_1.getDuplicates(array);
    if (is_empty_not_empty_1.notEmpty(duplicates))
        _removeDuplicates_startingFromTheEnd(array);
    return duplicates;
    function _removeDuplicates_startingFromTheEnd(array) {
        array.reverse();
        array_remove_all_of_first_of_1.removeFirstOfEach(duplicates, array);
        array.reverse();
    }
}
exports.getAndRemoveDuplicates = getAndRemoveDuplicates;
