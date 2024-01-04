// values declared using var have a block scope problem
// variables declaredwith var are accessible outside the block they are declared in
// this can cause problems when variables are imported in functions 

if(true){
    let a = 100
    const b = 200
    var c = 300
}

// console.log(a); //gives error
// console.log(b); // gives error
console.log(c); // does not give error

function one(){
    const username = "Anand"

    function two(){
        const channel = "Chai aur code"
        console.log(username)
    }

    // console.log(channel); // cannot access channel, not in scope
    two()
}

one();
// console.log(username); // cant access username, outside scope

// -------------------------------- Hoisting -------------------------------------

/* 
Variables in JS are very powerful, they can hold objects and functions also
However, there is a differnce in scope of functions that are stored in varaibles and those not stored
*/
console.log(addOne(5))    

function addOne(num){
    return num + 1;
}

console.log(addOne(5))


// console.log(addTwo(3)); // this gives error
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(3));