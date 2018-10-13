This function removes and returns every extra instance of each array item.
It does this by first finding all items that have duplicates, and then removing the 
first instance of each of those items until there's only one instance left.

For example this array:

 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 1, 2, 3];
 
 Once processed by the function, will be left like this:
 
 [ 4, 5, 6, 7, 8, 9, 10, 1, 2, 3 ]
 
 Things may seem out of order, so if you want things to appear in order, 
 it would be best to sort the entire array before you pass it into this 
 function.  If the array in the above example had been sorted first to 
 look like this:
 
 [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10]
 
 Then after being processed by the function it will look like this:
 
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]