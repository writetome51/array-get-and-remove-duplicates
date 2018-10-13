"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDuplicates_1 = require("@writetome51/array-get-duplicates/getDuplicates");
var removeFirstOf_removeFirstOfEach_1 = require("@writetome51/array-remove-all-of-first-of/removeFirstOf_removeFirstOfEach");
// Returns and removes every extra instance of each array item.
// Remaining items in array may be out of order.
function getAndRemoveDuplicates(array) {
    var duplicates = getDuplicates_1.getDuplicates(array);
    removeFirstOf_removeFirstOfEach_1.removeFirstOfEach(duplicates, array);
    return duplicates;
}
exports.getAndRemoveDuplicates = getAndRemoveDuplicates;
