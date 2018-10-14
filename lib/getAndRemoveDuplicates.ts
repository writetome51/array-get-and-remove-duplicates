import { getDuplicates } from '@writetome51/array-get-duplicates/getDuplicates';
import { removeFirstOfEach }
	from '@writetome51/array-remove-all-of-first-of/removeFirstOf_removeFirstOfEach';

// Removes and returns every extra instance of each array item.
// Remaining items in array may be out of order.

export function getAndRemoveDuplicates(array): any[] {
	let duplicates = getDuplicates(array);
	removeFirstOfEach(duplicates, array);
	return duplicates;
}
