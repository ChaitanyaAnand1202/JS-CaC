// arrays can contain different data types

const arr = [1,2,3,4]
// console.log(arr);

const arr2 = [1,2,3,4]
console.log(arr2);

arr2.push(10)
arr2.push(15)
console.log(arr2)

arr2.pop()
console.log(arr2)

arr2.unshift(25)
arr2.unshift(35)
console.log(arr2)

arr2.shift()
console.log(arr2);

// the join function is used to concatenate elements of array using given expression and then convert the result to string
console.log(arr2.join("-"))
console.log(arr2.join()) // by default use comma
console.log(arr2.join("hello"))

console.log(typeof arr2.join())


console.log('----------------Slice vs Splice-------------------')
/*
Slice vs splice
slice-> takes the subaaray -> does not change original array -> last index not included
splice-> 2 args are start and length -> divides the original array into 2 parts -> changes origina; array
*/

const nums = [1,2,3,4,5,6,7,8]
console.log("Original: ", nums)

const sliced = nums.slice(2,5)
console.log("Sliced: ", sliced)
console.log("Original after slice: ", nums)

const spliced = nums.splice(2,5)
console.log("Spliced: ", spliced)
console.log("Original after splice: ", nums)

