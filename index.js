//Functions

// 1 - Funtcions Declarations vs Expresions
/*
// In JavaScript we have tow ways to define a function, we can use the function decleration syntax
// or function expression witch basically ivnoleves declaring a variable or a constant
// amd then setting it to a function


// Funtcions Declarations 
function walk () {
    console.log('walk');
}

// Funtcions Expresions - we end a function with ";"
let run = function (){
let x = 1;
};

// Named Funtcions Expresions
let run = function () {
    console.log('run');
};

// Anonymous Funtcions Expresions
let run = function () {
    console.log('run');
};
run();
*/


// 2 - Hoisting - proces of moving function to the top of the file - this is done automatically by the JavaScript

// We can call a function that is define using the function decleration befor it definition// Funtcions Declarations 
walk();

function walk () {
    console.log('walk');
}