import { getDuplicates } from '@writetome51/array-get-duplicates/getDuplicates';
import { removeFirstOfEach } from '@writetome51/array-remove-all-of-first-of';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';

// Removes and returns every extra instance of each array item.
// Remaining items in array may be out of order.

export function getAndRemoveDuplicates(array): any[] {
	let duplicates = getDuplicates(array);
	if (notEmpty(duplicates)) removeFirstOfEach(duplicates, array);
	return duplicates;
}
