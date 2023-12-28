const num = 56.4567
console.log(num)
const anotherNum = new Number(34)
console.log(anotherNum)

console.log(num.toString().length) // converts number object to String object -> can use all functions of String object

console.log(num.toFixed()) // returns a string with given number of digits after decimal only -> useful for building pricing models
console.log(num.toFixed(2))
console.log(num.toFixed(4))
console.log(typeof num.toFixed(2))

console.log(num.toPrecision(5)) // 56.457
console.log(num.toPrecision(3)) // 56.5
console.log(num.toPrecision(1)) // 6e+1
console.log(typeof num.toPrecision(5)) // returns string type

const price = 1000000;
console.log(price.toLocaleString('en')) // 1,000,000 -> returned as String
console.log(price.toLocaleString('en-IN')) // 10,00,000 -> returned as String
console.log(typeof price.toLocaleString()); // returns a String




// -------------------------------------------Math-----------------------------------------------------//

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

console.log(Math.random()); // random number between 0 and 1
console.log((Math.random()*10) + 1); // random number between 1 and 10
console.log(Math.floor((Math.random()*10)) + 1); // random integer between 1 and 10

const min = 10
const max = 20
console.log(Math.floor((Math.random()*(max-min+1))) + min); // random integer between min and max
