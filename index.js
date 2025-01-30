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

