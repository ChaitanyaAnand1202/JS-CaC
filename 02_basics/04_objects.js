// nested objects
const User = {
    email: 'anand@gmail.com',
    name: {
        fullname : {
            first: "Chaitanya",
            second: "Anand"
        }
    }
}

console.log(User.name)
console.log(User.name.fullname)

//  ? is added to the object name to safeguard against cases where this object might not exist when calling api
// here there is no object called fullnameobject
// console.log(User.name.fullnameobject.first)  // this gives error
console.log(User.name.fullnameobject?.first)  // this gives undefined


// all of the following will return an array of values
console.log(Object.keys(User))
console.log(Object.values(User))
console.log(Object.entries(User)) // returns an array of arrays

// NOTE: before using any property of objects, it is advised to check first whther or not the object has that property in it or not
console.log(User.hasOwnProperty("email")) // this gives true
console.log(User.hasOwnProperty("fullname")); // this gives false
console.log(User.name.hasOwnProperty("fullname")); // this gives true 


console.log(" ---------------------Combining Objects---------------------------");
const obj1 = {1:'a', 2:'b'}
const obj2 = {2:'c', 3:'d'}

const obj3 = {obj1, obj2}
console.log(obj3);

/*
Object.assign will assign (or add) n source objects to a target object and return the target
if the target object is an already existing object, then it gets changed
To avoid this, we set the target object to an empty object {}
*/

// const obj5 = Object.assign(obj1, obj2) // this assigns obj2(source) to obj1(target)
// obj1 gets changed due to this

const obj5 = Object.assign({}, obj1, obj2) // now obj1 and obj2 are both sources
console.log(obj1, obj2, obj5); 

// most commonly used is still the spread(...) operator
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


console.log("-------------------Object Destructuring------------------")

/*
instead of using the full notation for accessing object properties (obj.propertyName),
an object can be destructured and each individual property can be accessed through an independent variable
*/
const Course = {
    name: "JS with chai",
    courseInstructor: {
        fullname: "Hitesh Choudhary",
        nickname: "Chai with Code"
    },
    price : 999
}

const {courseInstructor} = Course; // destructuring
console.log(courseInstructor)

const {fullname: cIns, nickname: cNick} = Course.courseInstructor; // further shortening
console.log(cIns, cNick);
