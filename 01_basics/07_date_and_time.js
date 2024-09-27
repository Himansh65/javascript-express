// Dates 
// Date is a object

let myDate = new Date()
console.log(myDate)
// return day, date, curr time
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON())

// return date proper structure
console.log(myDate.toLocaleDateString())

// return date and time
console.log(myDate.toLocaleString())

// return time only
console.log(myDate.toTimeString())

// declaration of date
let myCreatedDate = new Date(2022, 0, 23)
console.log(myCreatedDate.toDateString());


let myCreatedNewDate = new Date(2023, 0, 23, 7, 3)
console.log(myCreatedNewDate.toLocaleString());

let myNewDate = new Date("01-14-2023") 
console.log(myNewDate.toLocaleString());



let myTimeStamp = Date.now()
// time in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// time in seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getHours())
console.log(newDate.getDay()) 