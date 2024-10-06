// this keyword current context(value) ko refer karta hai
// browser ke andar global object window object hai

const user = {
    username: 'hitesh',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Rakesh"
// user.welcomeMessage()


// console.log(this);


///////////   Check ARROW FUNCTION  ////////

// 1. Normal function

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined output
// }

// chai()

// 2. variable store function

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);  // unddefined
// }

// chai()


// 3. Arrow function

// const chai = () => {
//     let username = 'Rakesh'
//     console.log(this.username); // undefined
// }
// chai()


const chai = () => {
    let username = 'Rakesh'
    console.log(this); // empty paranthesis {}
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(4,7))  // 11

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ({username: 'hitesh'})

console.log(addTwo(3,4))