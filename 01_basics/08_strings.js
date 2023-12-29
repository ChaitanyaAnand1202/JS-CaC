/*
NOTE: learn about regex(regular expression) and matching the regular expressions
*/

// String interpolation

const name = "Anand"
const repo_count = 15
console.log("Hi! my name is "+name+" and my repo count is "+repo_count); // this is bad practice
// instead do this
console.log(`Hi! My name is ${name.toUpperCase()} and my repo count is ${repo_count}`);

console.log('------------------String functions--------------------');
const str = new String("hello world")
console.log(str[1])
console.log(str.length) // this is an attribute not a function
console.log(str.charAt(5))
console.log(str.indexOf('wor'))
console.log(str.lastIndexOf('l'))
console.log(str.includes('hell'))
console.log(str.startsWith('hell'))
console.log(str.endsWith('rld'))
console.log(str.repeat(2))

console.log('---------------------trim------------------------');
const str1 = "     hello world     "
console.log(str1.trim())
console.log(str1.trimStart())
console.log(str1.trimEnd())

const str2 = 'chaitanya-anand-@-gmail-.-com'
console.log(str2.split('-')); // split based on the delimiter
console.log(str2.split('')); // since no deliemter, so split on all characters



console.log('-------------------Substring functions-----------------------')

/*
substr vs substring vs slice: -> substr is depreciated -> dont use
substr has 2 arguements : start and length -> if start is negative, then goes in reverse but if length is negative, then considers as 0
substring has 2 arguements : start and end -> if any is negative, then treated as zero -> if start > end then interchange the start and end
slice also 2 args : start and end -> if any is negative, then go in reverse -> if start > end then return empty
*/
// console.log(str.substr(1, 4))
console.log(str.substring(1, 4))
console.log(str.slice(1, 4))
// console.log(str.substr(-5, 4))
console.log(str.substring(-5, 4))
console.log(str.slice(-5, 4)) // shows empty becuase -5 on negative index is same as 6 and 6>4 so empty
// console.log(str.substr(1, -4))
console.log(str.substring(1, -4)) // -4 becomes 0, then 1>0, so interchange, so 0->1 gives h
console.log(str.slice(1, -4)) // -4 is same as 7 so 1<7, hence 1->7 give ello w


