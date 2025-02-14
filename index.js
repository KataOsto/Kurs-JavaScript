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
/*
// We can call a function that is define using the function decleration befor it definition// Funtcions Declarations 
walk();

function walk () {
    console.log('walk');
}
*/

// 3 - Arguments
/*
//arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return  total;
}

console.log(sum(1, 2, 3, 4, 5, 10));
*/


// 4 - The Rest Operator

// Function with a varying numbers of parameters
// When we use the rest operator to a parameter function we can pass a varying number of arguments and the 
// rest operator will take all of them and put them in an array
function sum(...args) {  //...- the rest operator
 console.log(args);
}

console.log(sum(1, 2, 3, 4, 5, 10));

//rest operator and reduce
function sum(...args) {  
    return args.reduce((a, b) => a+ b);
   }
   
   console.log(sum(1, 2, 3, 4, 5, 10));










