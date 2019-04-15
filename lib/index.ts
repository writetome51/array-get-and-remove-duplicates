import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { getDuplicates } from '@writetome51/array-get-duplicates';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { removeFirstOfEach } from '@writetome51/array-remove-all-of-first-of';


// Removes and returns every extra instance of each array item.

export function getAndRemoveDuplicates(array): any[] {
	errorIfNotPopulatedArray(array);
	let duplicates = getDuplicates(array);
	if (notEmpty(duplicates))  _removeDuplicates_startingFromTheEnd(array);
	return duplicates;


	function _removeDuplicates_startingFromTheEnd(array){
		array.reverse();
		removeFirstOfEach(duplicates, array);
		array.reverse();
	}

}
