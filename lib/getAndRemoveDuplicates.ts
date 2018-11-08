import { getDuplicates } from '@writetome51/array-get-duplicates/getDuplicates';
import { removeFirstOfEach } from '@writetome51/array-remove-all-of-first-of';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


// Removes and returns every extra instance of each array item.

export function getAndRemoveDuplicates(array): any[] {
	errorIfNotPopulatedArray(array);
	let duplicates = getDuplicates(array);
	if (notEmpty(duplicates)) {
		// Remove duplicates starting from the end:
		array.reverse();
		removeFirstOfEach(duplicates, array);
		array.reverse();
	}
	return duplicates;
}
