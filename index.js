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
/*
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
*/


// 5 - Default Parameters
/*
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest(10000));
*/


// 6 - Getters and Setters
/*
// Define method in the object called "full name"

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {                    // get - make it a getter
        return '${person.firstName} ${person.lastName}';
    },
    set fullName(value) {  // set - make it a setter
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
    }  
};

// getters - access propertis in an object
// setters - change or mutate propertis in an object

person.firstName = 'John Smith';
console.log(person);
*/


// 7 - Try and Catch
/*
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('Value is not a string');
          
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {                       // try block can have 1 or more statements, on of them can throw an exception
    person.fullName = null;
}
catch (e) {
    alert(e);
}

console.log(person);
*/


// 8 - Local and Blobal Scope
/*
// The Script scope is a useful place to store variables which must be 
// shared without exposing the variable to the Global scope

const color = 'red';    //Global scope: The default scope for all code running in script mode.

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}

function stop() {
    const message = 'bye';
}

start();
*/


// 9 - Let vs Var
/*
// 'Var' to najstarszy typ deklaracji, który jest dostępny w JS. Może być używany wielokrotnie 
// i jest widoczny globalnie lub lokalnie w funkcji. 'Let' to nowszy typ deklaracji zmiennych, 
// który jest widoczny tylko w obrębie bloku, wysłania instrukcji lub wyrażenia, w którym jest używany.

var color = 'red';    //in this state var becomes a window variable - DONT  DO IT
let age = 30;

function sayHi() {
    console.log('hi')
}

// Avoide using 'var keywords, becose it creates variables that are function 'Scope, not block scope.
*/

// 10 - The this Keyword

// The "object" that is executing the current function

/*
// method -> object

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

video.stop();
*/
/*
// funtion -> global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function playVideo() {
    console.log(this);
}

playVideo();
*/
/*
// funtion -> global (window, global)
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    ShowTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.ShowTags();
*/



// 10 - The this Keyword


//Arrow functions
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    ShowTags() {
        this.tags.forEach(tag  => {
            console.log(this.title, tag);
        });
    }
};

video.ShowTags();

//Functions are objects in JS 
//changing the value of this by using:bind, call, apply

/*
function playVideo(a, b) {
    console.log(this);
}
//CALL - a, b
playVideo.call({ name: 'Mosh'}, 1, 2);
//APPLY - applaing other values in an array [1,2]
playVideo.apply({ name: 'Mosh'}, [1, 2]);
//BIND - it returns a new function
const fn = playVideo.bind({ name: 'Mosh'})();

playVideo();
*/