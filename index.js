//10 Exercise
// Write a function that takes two numbers and returns the maximum of two.

/*
let number = max(3, 3);
console.log(number);

function max(a, b) {
    if ( a > b ) return a;
    return b;
}
*/

// 11 Landscape or Portrait

/*
console.log(isLandscape(800, 600))

function isLandscape(width, height) {
    return (width > height);
}
*/


// 12 FizzBuzz
// Jeśli liczba jest dzielona przez 3 => Fizz
// Jeśli liczba jest dzielona przez 5 => Buzz
// Jeśli liczba jest dzielona przez 3 i 5 => FizzBuzz
// Nie dzielona przez 3 i 5 => input
// Nie jest numerem => 'Not a number'

const  output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}