// convert to integer
let number = "123"  // 123
let number2 = "123ab"   // NaN
let number3 = "" // 0
let number4 = true // 1
let number5 = false // 0
let number6 = null // 0
let number7; // NaN

let numInt = Number(number7)
// console.log(numInt)

/* pay attention to null values since they get converted to 0 which is not an absence of values but a value itself */

// cnovert to boolean
let bool1 = "" // false
let bool2 = "abc" // true
let bool3 = 0 // false
let bool4 = 1 // true
let bool5 = -123 // true, same for all numbers except 0
let bool6 = null; // false
let bool7; // false

let boolBool = Boolean(bool7)
// console.log(boolBool)

// convert to string
let num = 23
let bool = true
let name = "abc"

let strConv = String(name)
// console.log(strConv, typeof(strConv))



/*----------------Operations on String to Number Conversions---------------------- */

// concatenation of strings with conversion
let str1 = "Hello "
let str2 = "World"
console.log(str1+str2)

console.log(1 + str1)
console.log(str1 + 1)

console.log(str1 + 1 + 2)
console.log(1 + 2 + str1)

// arithematic operations type conversation
console.log(true)
console.log(+true)
console.log("")
console.log(+"")