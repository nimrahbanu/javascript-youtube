let myDate = new Date();

console.log(myDate.toString()) //Wed Apr 15 2026 05:36:04 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Wed Apr 15 2026
// console.log(myDate.toLocaleDateString()) //4/15/2026
// console.log(myDate.toLocaleString()) //4/15/2026, 5:31:45 AM
// console.log(myDate.toLocaleTimeString()) //5:31:45 AM

let myCreatedDate = new Date(2023, 0, 23) //month zero se start hote h
console.log(myCreatedDate) //2023-01-23T00:00:00.000Z

let myTimeStamp = Date.now()
console.log(`mytimestamp: ${myTimeStamp}`) //mytimestamp: 1776231902627
 myCreatedDate = new Date("01-14-2023") //month zero se start hote h

console.log(`myCreatedDate: ${myCreatedDate.getTime()}`) //mytimestamp: 1776231902627

let currentDate = new Date(); 
console.log(`getMonth: ${currentDate.getMonth()}`) 
console.log(`getDay: ${currentDate.getDay()}`) 
console.log(`getFullYear: ${currentDate.getFullYear()}`) 
console.log(`getMonth: ${currentDate.getMonth()+1}`)  //getMonth: 4
// getMonth: 3// start from zero 
// getDay: 3// monday, tuesday, wednesday
// getFullYear: 2026

