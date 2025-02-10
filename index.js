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
/*
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
*/


// 8 - Combination and Sliceing Arrays
/*
//Declaring 2 arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

// Using the "concat" method - it will return the combination of the 2 arryas
const combined = first.concat(second);

// We slice the array in too parts
const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);


//Declaring 2 arrays, but one of them is an object
const first = [{id: 1}];
const second = [4, 5, 6];


const combined = first.concat(second);
first[0].id = 10;  // we copy not the object but the reference of the object

const slice = combined.slice(2, 4); 

console.log(combined);
console.log(slice);
*/


// 9 - Spread Operator
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

// Combining arrays by using the Spread Operator

const combined = [...first, ...second];  // we create a new array be combining the const

const slice = combined.slice();
*/



// 10- Iterating an Array
/*
const first = [1, 2, 3];

// The forEach function - it will be executed for each element in the array
for (let number of numbers)
    console.log (number);

number.forEach(function(number) {
    console.log(number);
});
*/


// 11- Joining Arrays
/*
// Join the elements in yhe array, we use 'join method'

const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);
*/


// 12- Sorting Arrays
/*
//Przykład 1 - sort
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

//Przykład 2 - reverse
numbers.reverse();
console.log(numbers);


//Przykład 3 - we want to sort by name
const courses = [
{id: 1, name:'Node.js'},
{id: 2, name:'JavaScript'},
];

courses.sort(function(a, b){
    //a < b => -1
    //a > b => 1
    //a === b => 0
const namA = a.name.toLocaleUpperCase();   // the first name will be taken as writen in uppercase
const namB = b.name.toLocaleUpperCase();   // the first name will be taken as writen in uppercase

    if (namA < namB) return -1;
    if (namA > namB) return 1;
    return 0;
})

console.log(courses);
*/


// 13- Testing the Elements of an Array

// Cheking if the numbers in the array are positive
const numbers = [1, 2, 3];

const allPosivive = numbers.every(function(value){
    return value >= 0;
});

console.log(allPosivive);

const atLeastOnePosivive = numbers.some(function(value){
    return value >= 0;
});

console.log(atLeastOnePosivive);