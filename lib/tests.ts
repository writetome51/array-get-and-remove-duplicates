import { getAndRemoveDuplicates } from './getAndRemoveDuplicates';
import { arraysMatch } from '@writetome51/arrays-match/arraysMatch';


let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 1, 2, 3];


// Test 1: Make sure it gets duplicate numbers:
let duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, [1, 1, 2, 2, 3, 3])) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: make sure those items were removed from array:
if (arraysMatch(arr, [4, 5, 6, 7, 8, 9, 10, 1, 2, 3])) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: Make sure it gets duplicate strings:
arr = ['', true, 10, false, '', 2, 'h', 1, 5, 'h', 'mertyujkl;', 20, 'mertyujkl;'];
duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, ['', 'h', 'mertyujkl;'])) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: make sure those items were removed from array:
if (arraysMatch(arr, [true, 10, false, '', 2, 1, 5, 'h', 20, 'mertyujkl;']))
	console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: Make sure it gets duplicate arrays:
arr = [[1, 2, 3], true, 10, false, 2, 'h', 1, 5, [1, 2, 3]];
duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, [[1, 2, 3]])) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: make sure those items were removed from array:
if (arraysMatch(arr, [true, 10, false, 2, 'h', 1, 5, [1, 2, 3]]))
	console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: Make sure it gets duplicate booleans:
arr = [[1, 2, 3], false, 10, 2, 'h', 1, 5, 6, false];
duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, [false])) console.log('test 7 passed');
else console.log('test 7 failed');


// Test 8: make sure those items were removed from array:
if (arraysMatch(arr, [[1, 2, 3], 10, 2, 'h', 1, 5, 6, false]))
	console.log('test 8 passed');
else console.log('test 8 failed');


// Test 9: if there are no duplicates, make sure it still returns empty array:
duplicates = getAndRemoveDuplicates(arr);
if (Array.isArray(duplicates) && duplicates.length === 0) console.log('test 9 passed');
else console.log('test 9 failed');