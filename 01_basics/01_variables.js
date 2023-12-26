const accountId = 12345
let accountName = "Chaitanya"
var accountNumber = "123432"
accountCity = "Deoghar"

console.table([accountId, accountName, accountNumber, accountCity])

// accountId = 3456 // not allowed
accountName = "Anand"
accountNumber = "12321"
accountCity = "Kolkata"

let accountBalance;

console.table([accountId, accountName, accountNumber, accountCity, accountBalance])

/*
It is not advised to write variables as var because it suffers from block scope problem
It is also not advised to leave the declaration as implicit (not const, let or var)
So use let wherever necessary since it is the safest option
*/