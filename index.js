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
/*
//Finding elements in an array depends on if we are storing primitives or reference types.

const numbers = [1, 2, 3, 4];

//IndexOf method - looking for an element in the array it returns the index of the element if not it returns "-1"

console.log(numbers.indexOf(1)); 

//Lastindexof - returns the last index, not it returns "-1"

console.log(numbers.lastIndexOf(1));

//Includes - returns true if element exist in the array

console.log(numbers.includes(1));
*/


// 4 - Finding Elements(Reference Types)
/*
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);
*/


// 5 - Arrow Functions
/*
//To pass a function, as a callback function or as an argument for a diffrent method
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];
// Finnding a course with the name equal to "a" - =>
const course = courses.find(course => course.name === 'a');

console.log(course);
*/


// 6 - Removing Elements
/*
const numbers = [1, 2, 3, 4];

//End -
const last = numbers.pop();
console.log(last);

//Beginning -
const first = numbers.unshift();
console.log(first);

//Middle -
numbers.splice(2, 2);
console.log(numbers);
*/

// 7 - Emptying an Array

let numbers = [1, 2, 3, 4];
let another = numbers;
//Solution 1 - we reassign to a new array - works if we dont have a references to the orriginal array.
numbers = [];

//Solution 2 - we remove all elements
numbers.length = 0;

//Solution 3 - we can go to a given posision and remove one or more elements
numbers.splice(0, numbers.length);

//Solution 4 - loop
while (numbers.length > 0)
    numbers.pop();


console.log(numbers);
console.log(another);

