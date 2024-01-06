// in reduce there are 2 parts -> the accumulator and the values of array (elements)
// each time some operation is performed on the accumulator and the values
// the initial value of the accumulator is given after the callback function definition

const myNums = [1, 2, 3]
const total = myNums.reduce( function (accum, val) {
    return accum + val;
}, 0 )
// console.log(total);

// using shorthand arrow function
const total2 = myNums.reduce( (accum, val) => accum + val, 0 )
// console.log(total2);

// showing the changes in acc values through the operations, initial value = 10
const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 10)
// console.log(myTotal); // output is 16

// the return type varies on the accumulator which is determined by both its initial value and operations performed
const total3 = myNums.reduce( (accum, val) => {
    return accum + val;
}, "" ) // here, initial value is empty string, so accumulator is a string, hence concatenation occurs not addition
// console.log(total3); // output is 123


// real-world use case -> suppose you want to callculate total price of items in cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// if some fixed charge needs to be applied, put it in initial value, otherwise here initial = 0
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);