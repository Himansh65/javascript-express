const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

// count each character
console.log(balance.toString().length);

// add decimal .00 as an input
console.log(balance.toFixed(2));

const otherNumber = 23.8966
// round off the value in given limit
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// add commas between as an indian rupees.
console.log(hundreds.toLocaleString('en-IN'));



//  ++++++++++++++ MATHS +++++++++++++  //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.47));

// ceil is used to round off upper value
console.log(Math.ceil(4.3))

// floor is used to round off lower value
console.log(Math.floor(4.7));

console.log(Math.sqrt(81))
console.log(Math.max(2, 5, 8, 3))
console.log(Math.min(4, 3, 6, 8))

console.log(Math.random())
// to avoid 0 add +1 in random number
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1))


const min = 10
const max = 20
// add min value for range of data
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

