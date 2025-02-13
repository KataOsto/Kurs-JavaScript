// 17 - Exercise 1 - Array from Gange
/*
// Write an array of the name arrayFromRange. This funcion should take two paramiters 'min' and 'max'
// When we run this program we get an array with the numbers from 1 to 4

const numbers = arrayFromRange (1, 4);

console.log(numbers);

function arrayFromRange (min, max) {
// first we creat an empty array
    const output = [];
// Know we need a "for loop" to generate numbers between min and max
    for (let i = min; i <= max; i++)
// We push this "i" into our array
    output.push(i);
// And we return are output
    return output;
}
*/


// 18 - Exercise 2 - Includes
/*
// Write a function like the includes method
// Create a function that takes an array and searchElements

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElements) {
    for (let element of array)
        if (element === searchElements)
            return true;
    return false;
}
*/


// 19 - Exercise 3 - Except
/*
const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
// Decler an array called output and initialize it to an empty, this is what we're going to return from this function
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
        return output;
}
*/


// 20 - Exercise 4 - Moving on Element
/*
// We have the function "move" and we use that to move an element in an array

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
// we need to do some basic validation before running this algorithm
    const position = index + offset;
// We cheak if posision is the same as lenght
    if (position >= array.length || position < 0) {
        console.error('invalid offset');
        return;
    }
// We wont copy the numbers array so we use the spread operator - we cone the original array
    const output = [...array];
// As part of moving an element, first we need to remove it from the array and then place it back at the right position    
// to remove an element from the array we use the splice method
    const element = output.splice(index, 1)[0];
    output.splice(index + offset,0 ,element);
    return output;
}
*/


// 21 - Exercise 5 - Count Occurrences

// Create a function calld 'occurrencese', this function takes an array and search elements
//and tuenes the number of times that search element has occurred in this array
/*
//Example 1
const numbers = [1, 2, 3, 4];

const count = countOcurrences(numbers, 0, 1);

console.log(count);

function countOcurrences(array,searchElements) {
// We declare account variable and initialize it to 0
    let count = 0;
// NOw we need to iterate over this, and if find element we're goging to increment count
    for (let element of array)
        if (element === searchElements)
            count++;
    return  count;
};
*/
//Example 2
/*
const numbers = [1, 2, 3, 4];

const count = countOcurrences(numbers, 0, 1);

console.log(count);

function countOcurrences(array,searchElements) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElements) ? 1: 0;
        console.log(accumulator, current, searchElements);
        return accumulator + occurrence;
    }, 0);
};
*/


// 22 - Exercise 6 - Get MAX
/*
// Returning the bigist number in the array
const numbers = [1, 2, 3, 4];

const max = getMax([]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    let max = array[0];

    for (let i=1; < array.length; i++)
        if (array[i] > max)
            max = array[i];

    return max;
};
*/
//Reduce method
/*
const numbers = [1, 2, 3, 4];

const max = getMax([]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a,b) => (a>b) ? a:b);
};
*/


// 23 - Exercise 7 - Movies

// Decler a constant calld movies, with an array of objects
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their raiting
// Decending order
// Pick their title


const titles = movies
//Filter-  All the movies in 2018 with rating > 4
    .filter(m => m.year === 2018 && m.rating >= 4)
// Sorting - Sort them by their raiting
    .sort((a, b) => a.rating - b.rating)
//  Decending order
    .reverse(m => m.title)

console.log(titles);