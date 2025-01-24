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
