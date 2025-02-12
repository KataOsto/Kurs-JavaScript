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