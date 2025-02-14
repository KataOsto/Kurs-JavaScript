//Functions

// 1 - Funtcions Declarations vs Expresions

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