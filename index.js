// 17 - Exercise 1 - Array from Gange

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