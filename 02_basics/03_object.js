// singleton --> single object when making with constructor.
// Object.create


//////   Object Literals   //////////
// literals use karte hai to singleton nhi banta hai

// symbols
const mySym = Symbol("key1")


const JsUser = {
  name: "Hitesh",
  fullName: "Harish",
  [mySym] : "key1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullName"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])


JsUser.email = "hitesh@chatgpt.com"
// freeze is used to fixed value don't change value.
// Object.freeze(JsUser);

JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

// function  used
JsUser.greeting = function () {
  console.log(`Hello Js user`);
}

JsUser.greetingTwo = function () {
  console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());