/*
7 primitive data types:
number, bigInt, string, boolean, null, undefined, symbol

reference (non-primitive)
array, objects, functions
*/ 

const arr = [1,2,3,4,5] 
console.log(arr, typeof arr)

const arr2 = [1,2,"abc", "bcd"]
console.log(arr2, typeof arr2);

const obj = {
    1 : "abc",
    2 : "bcd"
}
console.log(obj, typeof obj);

function print(a){
    console.log("Printing", a)
}
print("abcd")

const printFunc = function(a){
    console.log("printing", a)
}
printFunc("hello")

const person = {
    printName : function(firstname, lastname){
        return firstname + " " + lastname
    }
}

console.log(person.printName("John", "Doe"));


// console.log(myFunc, typeof myFunc)


/*
Symbol is used to provide uniqueness to the values
Below there are two constants that are given the same value 123 
but they are not same when checked using comarision and strict comparision operators
*/
const id = Symbol(123)
const anotherId = Symbol(123)
console.log(id == anotherId)
console.log(id === anotherId)