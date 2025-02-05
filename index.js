//Arrays

// 2 - Adding Elements

// Fisrst decler a constsnt calld number -INFO const do not stop us from modyfing the array
const numbers = [3, 4];

// Methods defining  in arrays for adding new elemnts
//End - push metod
numbers.push(5, 6);

//Beginning - unshift method
numbers.unshift(1, 2);

//Middle -splice method
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);