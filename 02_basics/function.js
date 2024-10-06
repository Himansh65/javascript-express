function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
  }
  addTwoNumbers(5, null)  // 5
  addTwoNumbers(6, 8);
  
  
  function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result;
  }
  // return wale result ko print karne ke liye store karo other variable then console. 
  const result = addTwoNumbers(4, 7)
  console.log("Result: ", result);
  
  
  // LOGIN USERNAME FUNCTION
  function loginUserMessage(username = "sam") {
    if (username === undefined) {
      console.log("please enter a username");
      return;
    }
    return `${username} just logged in`
  }
  
  console.log(loginUserMessage("hitesh"))
  console.log(loginUserMessage(""))
   // username -> undefined
  console.log(loginUserMessage())
  
  
  // SHOPPING E-CART FUNCTION
  // rest operator (...) is used to bundle of data.
  function calculateCartPrice(val1, val2, ...num1) {
    return num1
  }
  
  console.log(calculateCartPrice(200, 400, 500, 2000))
  
  
  
  // Using Objects passing into functions
  const obj = {
    username: "Mahesh",
    price: 900
  }
  
  function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
    
  }
  
  // handleObject(obj);
  handleObject({
    username: "sam",
    price: 100
  })
  
  
  
  // Using Arrays passing into functions
  const myNewArray = [200, 300, 600]
  
  function returnSecondValue(getArray) {
    return getArray[1]
  }
  
  console.log(returnSecondValue(myNewArray));
  
  console.log(returnSecondValue([200, 400, 600]));