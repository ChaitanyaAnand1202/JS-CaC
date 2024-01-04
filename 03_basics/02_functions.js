// if the number of arguements is not fixed, the rest(...) operator is used
// the rest(...) operator encapsulates the arguements given in to an array
function calculateCartPrice(...items){
    return items
}

function calculateCartPrice2(num1, num2, ...items){
    return items
}

console.log(calculateCartPrice(200, 300, 400))
console.log(calculateCartPrice2(200, 300, 400, 500, 2000))

// object parameters
const user = {
    username: 'Anand',
    balance: 999
}

function handleObject(obj){
    return `Username is ${obj.username} and balance is ${obj.balance}`
}

console.log(handleObject(user))
console.log(handleObject({
    username: "sam",
    balance: 909
}))

// array parameters
function returnSecond(arr){
    return arr[1]
}
const newArr = [1,2,3,4]
console.log(returnSecond(newArr))
console.log(returnSecond([12,21,43,56]))