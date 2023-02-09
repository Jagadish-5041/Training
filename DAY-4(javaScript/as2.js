var array_a = [1 , 2 , 3 , 4 , 5];
var array_b = [6 , 7 , 8 , 9 , 10];
var array_c = [11 , 12 , 13 , 14 , 15];

// Three Methods can be used to empty an array

// Method - 1 => re-initialize the array with no elements
array_a = [];
console.log(array_a.length);

// Method - 2 => set the length-property of an array to 0 , but this does not free up the objects in the array , it may leave some memory implications
array_b.length = 0;
console.log(array_b.length)

// Method - 3 => by using the splice method we can give the starting and ending index in it where the particular range of elements are removed from the array , in order to empty an array we can give the starting index as 0 and the ending index as the length of the corresponding array
array_c.splice(0 , array_c.length);
console.log(array_c.length)