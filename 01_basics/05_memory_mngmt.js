/* 
Stack is for primitve data types -> a copy of the value is provided when neeeded
Heap is for non primitive or refernce type -> only a reference to the data is given when needed
*/

let name = "Anand"
let anotherName = "Chaitanya"
name = "Vats"
console.log(name);
console.log(anotherName);

let userOne = {
    user : "anand@gmail.com",
    upi : "anand@skbi.com"
}

let userTwo = userOne;

userTwo.user = "vats@gmail.com"

console.log(userOne.user);
console.log(userTwo.user);
