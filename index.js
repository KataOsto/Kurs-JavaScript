//Arrays

// 2 - Adding Elements
/*
// Fisrst decler a constsnt calld number -INFO const do not stop us from modyfing the array
const numbers = [3, 4];

// Methods defining  in arrays for adding new elemnts
//End - push metod
numbers.push(5, 6);

//Beginning - unshift method
numbers.unshift(1, 2);

//Middle -splice method
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);
*/


// 3 - Finding Elements(Primitive)

//Finding elements in an array depends on if we are storing primitives or reference types.

const numbers = [1, 2, 3, 4];

//IndexOf method - looking for an element in the array it returns the index of the element if not it returns "-1"

console.log(numbers.indexOf(1)); 

//Lastindexof - returns the last index, not it returns "-1"

console.log(numbers.lastIndexOf(1));

//Includes - returns true if element exist in the array

console.log(numbers.includes(1));