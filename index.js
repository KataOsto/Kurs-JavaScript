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

/*
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
*/
   
// 13 Demerit Points

//Speed Limit = 70
//5-> 1 point
//use  Math.floor(1.3)
//12 points -> suspended

/*
chackSpeed(130);

function chackSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('Ok');
    else {
       const points = Math.floor((speed - speedLimit) / kmPerPoint);
       if (points >= 12)
        console.log('License suspended');
       else
        console.log('Points', points);
    }
}
*/

// 14 Even and Odd Numbers
/*
showNumber(10);

function showNumber(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');
    }
}
*/ 

// 15 Count Truthy

/*
const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
        return count;
}
*/

// 16 String Properties

/*
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b' 
};

showPropertis(movie);

function showPropertis(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}
*/

// 17 Sum of Multiples of 3 and 5

//Multiples of 3: 3 6 9
//Multiples of 5: 5 10


console.log (sum(10));

function sum(limit) {
    let sum = 0;

   for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
        sum += i;

   return sum;

}