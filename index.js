// 12 - Exercise 1 - Sum of Arguments

// Creata a function calld some that takes a varying number of argumens, and returns their sum.
//(1, 2, 3, 4) =>10

console.log(sum([1, 2, 3, 4]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    
    return items.reduce((a, b) => a + b);
}
