// Immediately Invoked Function Expressions (IIFE)
// Global Scope ke pollution se problem hoti hai kahi baar to us global scope ke pollution ko hatane ke liye use kiya hai iife ko.
// two iffe likhte samay semicolon jarur lagaye ek iffe ke end hone ke baad.

(function chai(){
    // named IFFE
    console.log('DB CONNECTED');  // DB CONNECTED
})();

( (name) =>{
    // SIMPLE/ UNNAME IFFE
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')