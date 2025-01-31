// Objects

// 1 Basics 

// object variables for a circle - data
/*
let radius = 1;
let x =1;
let y = 1;
*/
// Defining an object - cen use "const" or "let"


// Object-oriented Programming (OOP)
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw')
    }
};

circle.draw(); // draw "Method" of an object
*/

// 2 Factory Functions

/*
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
  }

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
*/


// 3 Constructor Functions

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(1);
*/


// 4 Dynamic Nature of Objects


/*
const circle = {
    radius:1
};

circle.color = 'yellow';
circle.draw - function() {}

delete circle.color;
delete circle.draw;

console.log(circle);
*/


// 5 Constructor Property

/*
new String(); // "", '', 
new Boolean(); // true, false
new Number(); //1, 2, 3
*/


// 6 Function are Objects

// in JavaScript function is object

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
*/

// 7 Value vs Reference Types

/*
//Exemple 1 - 2 independent values
let x = 10; //independent value
let y = x; //independent value

x = 20;  // changing value of x=20 - y=10 stays the same

//Exemple 2 - 2 independent values
let x = {value: 10}; //independent object
let y = x; //independent value

x.value = 20;  // changing value of x=20  in this exemple the value is stord in memory y=20
*/

// 8 Enumerating Propertis of a Object

// the best way to enumerait propertis in an object is to use "for in" loop
/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry)
*/


// 9 Cloning an Object

// Geting all propertis in an object and copy them into another object

/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

//const another = {};               // {} symbolize a new object in witch we copy the propertis from "circle"

//for (let key in circle)           //old method
//   another[key] = circle[key];    //old method

const another = Object.assign({}, circle); //the propertis of this method in the source object and copies them into new object and returns the result

const another = {...circle} //"..." Spread operator - it takes all the propertis and methods and puts them in between {}

console.log(another);
*/


// 10 Garbage Collection

// at the time we initialized an object, the memory is automatically allocated to this object
// after using it we don't need to deallocate the mmemory

/*
let circle = {};
    console.log(circle);
*/


// 11 Math - object

// MATH - is a built-in object that has propertis and methods for mathematical
// constants and functions. Not a function object.


// 12 String
/*
// In javascript we have 2 types of "string"
const massage = 'hi';                  // String primitive
const another = new String('hi');          // String object

const massage = 'This is my first massage';   
*/


// 13 Tamplate Literals

// Object {}
//Boolean true, false
//String ''. ""
//Tamplate ``

/* 
const name = 'John';
const massage = 'Hi' + name + ',\n';

const another = 
`Hi ${name},

Thank you for joining my mailing list.

Regards,
Mosh`;
*/


// 14 Date

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);