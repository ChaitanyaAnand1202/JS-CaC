// read more on toLocaleString options

/*
The Date onject classs is used to display time and date using offset calculated in miliseconds from the origin point
It can only display the date between Jan 1 1970 and Sep 13 275730 which correspond to values 0 and 8.64e15
If no parameter given, the default constructor assigns system time to Date object
*/

const firstDate = new Date(0); // starting date limit
console.log(firstDate);
console.log(firstDate.toString());

const lastDate = new Date(8.64e15); // ending date limit
console.log(lastDate);
console.log(lastDate.toString());

console.log((new Date()).getTimezoneOffset()) // gives the difference between GMT and system time zone

console.log('-------------------------Date Time Initialization -------------------------');
console.log((new Date(2023, 5, 10)).toString()); // here, month starts from 0 and time is already in local time
console.log((new Date(2023, 5, 15, 18, 10, 5)).toString());
console.log((new Date('2023-11-18')).toString()); // here, month starts from 1 and time is converted to local time

console.log('-------------------------Date Time Functions-------------------------------')

const currDate = new Date();
console.log(currDate);
console.log(currDate.toString());
console.log(currDate.getTime()); // time in miliseconds -> if put back in the Date object, will get back current time
console.log((new Date(currDate.getTime())).toString()); // gets back the current time
console.log(currDate.getFullYear());
console.log(currDate.getMonth()); // starts from 0, so add 1 if necessary
console.log(currDate.getDate());
console.log(currDate.getHours());
console.log(currDate.getMinutes());
console.log(currDate.getDay()); // starts from Monday -> 1

console.log('-----------------------Date Time Formatting----------------------------------');

console.log(currDate.toString());
console.log(currDate.toISOString()); // formats to original date time
console.log(currDate.toUTCString()); // shows the GMT time
console.log(currDate.toJSON()); // calls the ISO function and returns the same result
console.log(currDate.toLocaleString('IN')); // shows date time in Indian format
console.log(currDate.toLocaleTimeString('IN')); 
console.log(currDate.toLocaleDateString('IN'));


