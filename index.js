// 15 - Exercise 1 - Adress Object

// Create Adress object with 3 propertis:
//street
//city
//zipcode
//Creat function:
//showAdress(address)
/*
let address = {
    street: 'a',
    city: 'b',
    zipcode: 'c'
};

function showAdress(address) {
    for (let key in address)       // We use the "for in" loop, We use the {} bracket notation for the value of a given key.
        console.log(key, address[key]);
}

showAdress(address);            // and finally we call this function showAdress and pass our address object
*/


// 16 - Exercise 2 - Factory amd Constructor Functions

// In this exercise we initialize an adress object, first using a factory function 
// and then using constructor function. 
/*
let address = createAdress('a', 'b', 'c');              // In factory function we simply create a new adres using literal syntax we call createAdress

console.log(address);
// Factory function returns a new object
function createAdress(street, city, zipcode) {          // We  give it 3 paramiters: street, city, zipcode
    return {                                            // We simply return or create a new object with 3 propertis
        street,
        city,
        zipcode
    };
} 

//Constrructor Function
// it has a diffrent naming convention, so we use Pascal notation 

let address = new Address('a', 'b', 'c');      // We use a new operator and call are constructor function once we pass the values

console.log(address);

function Address(street, city, zipcode) {      // Insted of returning an objest we use keyword to initialize a new object
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
*/


// 17 - Exercise 3 - Object Equality

// Create two objects
// Create two functions: 1 is calld "areEqual" so we pass two address object,
/* 
let address1 = new Address('a', 'b', 'c');    
let address2 = new Address('a', 'b', 'c');  

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipcode) {     
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areEqual(address1, address2) {                   //we pass to adress object and see if they are Equal //=== Equality operator - chect if equal
    return     address1.street === address2.street &&     // we need to return a bollean - the result of evaluation of the three conditional statment
        address1.city === address2.city &&
        address1.zipcode === address2.zipcode;
}

function areSame (address1, address2)  {                  // This function tells if the they are referencing the same object
      return address1 === address2;                       // Use the strict equality operator to chack if the they are referencing the same object
} 
  */
 

// 18 - Exercise 4 - Blog post

//Create blog post object with propertis : 
// title 
// body 
// author
// views - how ment times the post has been seen
// comments - with propertis - author and body
//isLive - true or false

let post = {            // Create a post object be using "the object literal syntax"
    title: 'a',         //string
    body: 'b',           //string
    author: 'c',         //string
    views: 10,          //number
    comments: [         //array (tabela), we need to make it an object we use "object litheral syntax" to initialize a comment object
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ],
    islive: true
};   

console.log(post);



