// 12 - Exercise 1 - Sum of Arguments
/*
// Creata a function calld some that takes a varying number of argumens, and returns their sum.
//(1, 2, 3, 4) =>10

console.log(sum([1, 2, 3, 4]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}
*/


// 13 - Exercise 2 - Area of Circle

// Making a circle be using the object literal syntax
// the objest needs radius propertis
// We can write the value
// We can have an area property that is read only

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);