// the for-of loop is used for iterable data, eg:array,string,map but not object, since objects are ennumerated and not iterable

// arrays
const arr = [1,2,3,4]
for (const num of arr) {
    // console.log(num)
}

// string
const greeting = 'Hello world'
for (const letter of greeting) {
    // console.log(letter);
}

// maps -> like key value pairs but not like objects -> here the entries are ordered in order of their insertion
// maps are iterable -> they are more like 2-D arrays
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

console.log(map) // shows all entries withthe mapping

for (const entry of map) { // if accessed through single unbounded const, it returns each entry as array object
    console.log(entry, typeof entry);
}

for (const [entry] of map) { // if accessed through single var in [], it will return only the key of each mapping
    console.log(entry, typeof entry);
}

for (const [key, value] of map) { // this way returns both key and value
    console.log(`${key} is the code for -> ${value}`);
}

// for (const [key, value, abc] of map) { // the third var gives undefined
//     console.log(key, " " , value, " " , abc);
// }

// In a map key-val pairs are unique -> no duplicate keys are allowed
map.set('IN', 'India')
console.log(map); // this is not added to the map

map.set('IN', 'Japan') // this is not added to map but the value of IN gets modified
console.log(map);

map.set('JP', 'Japan') // this is added to map as new entry
console.log(map);



// It is not possible to do such with objects
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const entry of myObject) { // gives error that Object is not iterable
// for (const [key] of myObject) {  // gives same error
// for (const [key, val] of myObject) { // gives same error
//     console.log(key, val)
// }