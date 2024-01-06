// falsy values  
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// any non-zero values, even negative
// any non empty string -> "0", "false", "NaN", " " -> these are all true even if they look false
// empty or non-empty non-primitive data -> [](empty array), {}(empty object), function(){}

// how to compare empty arrays or objects? -> compare their lengths or number of keys
const userMailList = []
if(userMailList) {
    console.log(userMailList); // we want this to execute only if non empty but it will always execute
}

// if we want to use the condition then:
if(userMailList.length != 0){ // or (!userMailList.length)
    console.log(userMailList); // now this is not executed if empty
}

// to do same with objects, compare the number of keys
// keys are also returned as arrays so just check length
const empObj = {}
if(Object.keys(empObj).length == 0){
    console.log("This object is empty");
}


//  Nullish Coalescing Operator (??): null undefined
// this is a new operator that was introduced to handle null or undefined values that may be returned by functions
// it is used to assign some constant value (or value returned by another function) should a function return null or undefined since it can cause problem in flow of program later on
// its normal usage is : var = func1() ?? func2() ?? some_const; 
// so if one function returns null or undefiend, then another function value is assigned, if that also fails then some constant is assigned
let val1;
val1 = 5 ?? 10; // if both constant then assign first constant
let val2 = null ?? 5; // if one is null then assign the constant
let val3 = undefined ?? 5; // same for undefined
let val4 = null ?? 5 ?? 10; // if many constants assign the first one
let val5 = null ?? undefined ?? 5 ?? 10; // if many nulls/undefiend then assign the first constant

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")