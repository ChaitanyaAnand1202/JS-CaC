// for-in loop is used to loop over enumerable objects -> it ccan be objects or arrays
// for arrays the keys are the index(integers), but for objects, keys are strings

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) { // this gives the keys
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

// for arrays, the keys are their indices
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(`${key} :- ${programming[key]}`);
}

// run the following in browser and expand on the output -> it will show the structure of array objects
// const prog = new Array();
// prog.push("js")
// prog.push("js")
// prog.push("js")
// prog.push("js")
// console.log(prog)

// does not work on map since they are not enumerable
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) { // gives error
//     console.log(key);
// }