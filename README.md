# getAndRemoveDuplicates(array): any[]

Removes and returns every extra instance of unique items in `array`.   
NOTICE:  The function will error if `array` contains an object.  
'object' does not include arrays.  Arrays are OK.

## Examples
```
let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 2];  
let duplicates = getAndRemoveDuplicates(arr);  
// arr is now [1,2,3,4,5].  
// duplicates is now [1,2,2,3,4]  
// (In returned duplicates, identical items are always side-by-side)

let arr = [1, 2, ['a','b'], 9, 1, 2, 3, 4, ['a','b'], 1, 9, ['a','b']];  
let duplicates = getAndRemoveDuplicates(arr);  
// arr is now [1, 2, ['a','b'], 9, 3, 4]  
// duplicates is now [1, 1, 2, ['a','b'], ['a','b'], 9]

// This will trigger error, because arr contains object:  
let arr = [1, 2, {prop:1}, 2, 3, 4];  
getAndRemoveDuplicates(arr); // Error!
```


## Installation
`npm install  @writetome51/array-get-and-remove-duplicates`

## Loading
```
// If using TypeScript:
import {getAndRemoveDuplicates} from '@writetome51/array-get-and-remove-duplicates';
// If using ES5 JavaScript:
var getAndRemoveDuplicates = 
	require('@writetome51/array-get-and-remove-duplicates').getAndRemoveDuplicates;
```
