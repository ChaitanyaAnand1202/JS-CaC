// == to check values only, === to check both value and data type
const num1 = 5
const num2 = "5"
console.log(num1 == num2);  // true
console.log(num1 === num2); // false

// rest all conditionals work on the implicit type conversions as discussed

// switch case works the same as all other languages
// Note: if fall through occurs, default case is also executed
const month = "march"
switch(month){
    case 'jan':
        console.log("January");
        break;
    case 'feb':
        console.log("February");
    case 'march':
        console.log("March");
    case 'april':
        console.log("April");

    default:
        console.log("Default case");
}

// fallthrough occurs then default case also executed