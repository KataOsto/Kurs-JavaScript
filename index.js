// 15 - Exercise 1 - Adress Object

// Create Adress object with 3 propertis:
//street
//city
//zipcode
//Creat function:
//showAdress(address)

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

