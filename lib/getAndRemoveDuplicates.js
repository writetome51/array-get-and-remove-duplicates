"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDuplicates_1 = require("@writetome51/array-get-duplicates/getDuplicates");
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
// Removes and returns every extra instance of each array item.
// Remaining items in array may be out of order.
function getAndRemoveDuplicates(array) {
    var duplicates = getDuplicates_1.getDuplicates(array);
    if (isEmpty_notEmpty_1.notEmpty(duplicates))
        array_remove_all_of_first_of_1.removeFirstOfEach(duplicates, array);
    return duplicates;
}
exports.getAndRemoveDuplicates = getAndRemoveDuplicates;
