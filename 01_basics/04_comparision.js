/*
There is a differnece between the operation of == and other comparision operators
Any other comparision will convert the dattatype to number and then compare
== and === are ambiguous and do not have logical results for null or undefined types
*/

// if numbers compared then no problem, works like usual
// console.log('2' > 2)
// console.log('2' == 2)
// console.log('2' < 2)
// console.log('2' <= 2);



/* 
comparision with null => null is converted to 0 for comparision operators
but null is not converted to 0 for equality operator (==)
*/
console.log(null > 0); // F
console.log(null == 0); // F
console.log(null < 0); // F since 0 not less than 0
console.log(null <= 0); // T since 0 is equal to 0



/*
comparision with undefined -> relatively simple -> all give false
*/
console.log(undefined > 0); 
console.log(undefined == 0);
console.log(undefined < 0);  
console.log(undefined <= 0);  


/*
=== -> strict equality operator -> checks not only the values but the datatype as well
*/
console.log("2" === 2)
console.log(null === 0)
console.log(undefined === 0);