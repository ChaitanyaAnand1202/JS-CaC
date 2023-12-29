const marvel = ["ironman", "hulk", "captain"]
const dc = ["batman", "superman", "flash"]

// const hero = marvel.push(dc) // this will push the second array as a whole array instead of individual elements
// console.log(hero);

const hero2 = marvel.concat(dc) // this will push element wise
console.log(hero2);

// better way to concat is using the spread(...) operator, so more than 2 arrays can be joined at the same time
const hero3 = [...marvel, ...dc]
console.log(hero3);

const arr = [1,2,3,[3,5], 6, 7,[8,[9,2,10]]]
const flat_arr1 = arr.flat(1) // oflattens the array to depth 1
const flat_arr2 = arr.flat(2) // flattens the array to depth 2
const flat_arr = arr.flat(Infinity) // completely flattens the array

console.log(flat_arr)
console.log(flat_arr1)
console.log(flat_arr2)

console.log('---------------------Array.of and Array.from----------------');
/*
Array.of() -> make array of a set of elements
Array.from() -> make array from array-like objects or mapping functions
*/
const a = 1
const b = 2
const c = 'a'
const d = null
let e;
console.log(Array.of(a,b,c,d,e))

console.log(Array.from("Hitesh"))
console.log(Array.from([1,2,3,4], x=>x*2)) // mapping function

const obj ={
    name : "Chaitanya",
    age: 21
}
console.log(Array.from(Object.keys(obj))) // array of keys of object
console.log(Array.from(Object.values(obj))) // array of values of object

