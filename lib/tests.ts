import { getAndRemoveDuplicates } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 1, 2, 3];
let arrCopy = arr;


// Test 1: Make sure it gets duplicate numbers:
let duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, [1, 1, 2, 2, 3, 3])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1A: Make sure the memory reference wasnt broken:
if (arraysMatch(arr, arrCopy)) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 2: make sure those items were removed from array:
if (arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: Make sure it gets duplicate strings:
arr = ['', true, 10, false, '', 2, 'h', 1, 5, 'h', 'mertyujkl;', 20, 'mertyujkl;'];
duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, ['', 'h', 'mertyujkl;'])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure those items were removed from array:
if (arraysMatch(arr, ['', true, 10, false, 2, 'h', 1, 5, 'mertyujkl;', 20]))
	console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure it gets duplicate arrays:
arr = [[1, 2, 3], true, 10, false, 2, 'h', 1, 5, [1, 2, 3]];
arrCopy = arr;
duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, [[1, 2, 3]])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 5A: Make sure the memory reference wasnt broken:
if (arraysMatch(arr, arrCopy)) console.log('test 5A passed');
else console.log('test 5A FAILED');


// Test 6: make sure those items were removed from array:
if (arraysMatch(arr, [[1, 2, 3], true, 10, false, 2, 'h', 1, 5]))
	console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Make sure it gets duplicate booleans:
arr = [true, [1, 2, 3], false, 2, 'h', true, 6, false];
duplicates = getAndRemoveDuplicates(arr);
if (arraysMatch(duplicates, [true, false])) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: make sure those items were removed from array:
if (arraysMatch(arr, [true, [1, 2, 3], false, 2, 'h', 6]))
	console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9: if there are no duplicates, make sure it still returns empty array:
duplicates = getAndRemoveDuplicates(arr);
if (Array.isArray(duplicates) && duplicates.length === 0) console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 10: should trigger error if array is empty:
let errorTriggered = false;
try {
	getAndRemoveDuplicates([]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 11: should trigger error if array is empty:
errorTriggered = false;
try {
	getAndRemoveDuplicates('hello there');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 11 passed');
else console.log('test 11 FAILED');


// Test 12: should trigger error if array contains object:
errorTriggered = false;
try {
	getAndRemoveDuplicates([1, '', false, {}]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 12 passed');
else console.log('test 12 FAILED');
