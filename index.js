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

// 4 Dynamic Nature of Objects