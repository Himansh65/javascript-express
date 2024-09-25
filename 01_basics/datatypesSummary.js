// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const str = "Harry Bhai"
const score = 7658
const isLoggedIn = false 
const tasksAssign = null;
const password = undefined;

const str1 = Symbol('2345')
const str2 = Symbol('2345')

console.log(str1 == str2);

const bigNumber = 839203237290302n
console.log(bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

const elements = ["Harry", "Rakesh", "Garima"]

const obj ={
    name: "Rakesh",
    rollno: 1234,
    city : 'Kanpur' 
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction);

console.log(typeof null)
