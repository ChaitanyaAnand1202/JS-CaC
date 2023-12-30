// singleton -> made using constructors -> can only have one instance throughout the execution 
// not singleton -> made like literals -> can have many different instances 

// Object.create -> used to make singleton objects

const JSUser = {
    name : "Anand",
    'full name' : "Chaitanya Anand", // this key has to be written in "" since space not allowed
    age : 18,
    location : "Jaipur",
    email : "anand@gmail.com",
    isLoggedIn : false,
    loginDays : ['Monday', 'Tuesday', 'Friday']
}

// 2 ways to access members of object
console.log(JSUser.age)
console.log(JSUser["age"])

// in some cases, it is not possible to use dot for access
console.log(JSUser["full name"]) // cannot access this value using dot(.)

/*
To use symbols as keys, it is necessary to enclose the key in []
Also when accessing the value of this symbol key -> always use [], not dot(.)
*/
const symb = Symbol('mySym1')

const anotherUser = {
    name : "Anand",
    'full name' : "Chaitanya Anand", // this key has to be written in "" since space not allowed
    age : 18,
    not_symbol : 'mySym1',
    [symb] : 'mySim1'
}

console.log(anotherUser.not_symbol, typeof anotherUser.not_symbol);
// console.log(anotherUser.symbol);  // this gives error
console.log(anotherUser[symb], typeof anotherUser[symb]);

// there will be no difference in the datatype of the values, but difference is observed when the object is rprinted as a whole
// console.log(anotherUser);


/*
Object.freeze() -> freezes object -> no more changes can be done to properties and function
Once object is frozen, it cant be unfrozen -> only way to get around is to make a copy and then make changes
*/

JSUser.email = "chaitanya@gmail.com" // this change is made
Object.freeze(JSUser)
JSUser.email = "chaitanya@microsoft.com" // this change not made
console.log(JSUser);

// JSUser.greeting = function(){
//     console.log("Hello user");
// }
// console.log(JSUser.greeting()) // this will give error since JSUser was frozen, so method is not added

anotherUser.greeting = function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(anotherUser.greeting); // this only returns the refernce of the function
console.log(anotherUser.greeting()); // this executes the function

/*
Why undefined is printed on terminal when executing the grreting function?
the message printed is the one inside the function
After that, the undefiend is the value that is returned by the function that is printed by console.log(function call)
*/

