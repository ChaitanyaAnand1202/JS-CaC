/*
this keyword is used to refer to the current context
context is always refering to object, it does not relate to functions
*/

/*
the global context differs based on the environment its run in
In the node env, the global context is empty
But in browser environment, the global context is the Window object
*/

const user = {
    username: 'Hitesh',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcone to website`);
        console.log(this); // this will print the current context which is the user object
    }
}

// user.welcomeMessage()
user.username = "Sam"
// user.welcomeMessage()

/*
the global context differs based on the environment its run in
In the node env, the global context is empty
But in browser environment, the global context is the Window object
Similarly it is different for other js environments
*/
// console.log(this); // prints an empty object


/*
this does not work with functions same way as objects
although functions have a context as they are treated objects, they cannot make use of this keyword to access their members
Arrow functions have no context of their own and so using this in arrow function returns empty object
*/
function chai() {
    let username = "Hitesh"
    console.log(this); // this wil give info about function which is treated like object and have a context
    console.log(this.username); // gives undefined since this keyword doesnt work with functions
}
chai()

const coffee = function () {
    let username = "Hitesh"
    console.log(this.username); // this gives undefined
}
coffee()

// arrow function can be used to do the same stuff but just a different format
// they have no context, so this keyword returns empty object
const chaiCoffee = () => {
    let username = "Hitesh"
    console.log(this); // gives empty object, not like the functions before
    console.log(this.username); // this gives undefined
}

chaiCoffee()


// more arrow function formats
const addTwo = (num1, num2) => {
    return num1 + num2;
}

// if there is only one statemnt then it doesnt need {}
const addTwo2 = (num1, num2) => num1 + num2;

// the return statement can also be enclosed in () (not {})
const addTwo3 = (num1, num2) => (num1 + num2);

// if we need to return objects or arrays, we need to enclose it in ()
const addTwo4 = (num1, num2) => {user: "hitesh"}; // this will not return anything
const addTwo5 = (num1, num2) => ({user: "hitesh"})




console.log(addTwo(4,3));
console.log(addTwo2(4,3));
console.log(addTwo3(4,3));
console.log(addTwo4(4,3)); // this gives undefiend since nothing is returned
console.log(addTwo5(4,3)); // this shows object that is returned