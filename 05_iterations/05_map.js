// map means for each element in the array, return some particular value
// here for each element, there will always be an entry in resulting array object
// the value pushed is not necessarily the element itself

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (val) => {
    return val + 10;
} )
console.log(newNums);

// chain mapping
const newNums2 = myNumers.map( (num) => num*10 ).map( (num) => num + 1 );
console.log(newNums2);

// aalong with map, filters can also  be chained
const newNums3 = myNumers.map( (num) => num*10 ).map( (num) => num + 1 ).filter( (num) => num > 40);
console.log(newNums3);