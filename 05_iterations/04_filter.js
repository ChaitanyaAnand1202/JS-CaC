// filter is used to return only those elements that satisfy some condition 
// it can simply return the elements as is and does not change the elements
// since it returns the values, it is assigned generally as a array
// if no values are returned then the result is simply an EMPTY array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( function (num) {
    return num > 4;
} ) // newNums only has those elements greater than 4

// console.log(newNums);

// same thing using arrow function
const newNums2 = myNums.filter( (num) => {
    return num > 4;
} ) // newNums only has those elements greater than 4
// console.log(newNums2);

// the filter functionality can be replicated through simple forEach loop as well
const newNum3 = []
myNums.forEach( (num) => {
    if (num > 4){
        newNum3.push(num)
    }
} )
// console.log(newNum3);


// real life use case -> again when data is mostly in form of array of obejcts, this can be used to filter only the required data
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// if we want only the books of genre -> history
let reqBooks = books.filter( (book) => book.genre === 'History' )
// console.log(reqBooks);

// if we want only the books of history genre published after 1995
reqBooks = books.filter( (book) => {
    return book.genre === "History" && book.publish > 1995
} )
console.log(reqBooks);


// if we dont return anything then the result will simply be empty
const newNum4 = myNums.filter( (val) => {
    console.log(val); // no return statement
} )  
console.log(newNum4); // simply an empty array

// if return true or truthy values, then all elements will be added
const newNum5 = myNums.filter( (val) => {
    return "abc"; // non empty string is true
} )
console.log(newNum5); // full original array