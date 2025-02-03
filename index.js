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
*/
//Constrructor Function
// it has a diffrent naming convention, so we use Pascal notation 


let address = new Address('a', 'b', 'c');      // We use a new operator and call are constructor function once we pass the values

console.log(address);

function Address(street, city, zipcode) {      // Insted of returning an objest we use keyword to initialize a new object
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
