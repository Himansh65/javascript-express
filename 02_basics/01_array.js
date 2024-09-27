// array
const myArr = [8, 1, 2, 4, 4, 3]
const myHeros = ["hitesh", "shahrukh", "salman"]
console.log(myArr[0])

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[0])


// Array Methodds

// 1. PUSH
myArr.push(6)
myArr.push(9)
console.log(myArr)

// 2. POP
myArr.pop()
console.log(myArr)

// 3. unshift is shift all elemnts and insert eleemnt in first position
myArr.unshift(9)
console.log(myArr);


// 4. shift is remove first elemnt and shift
myArr.shift()
console.log(myArr)

// 5. includes check element present or not
console.log(myArr.includes(9))
console.log(myArr.indexOf(3))


// 6. join is used to convert into strings.
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof(newArr))

// 7. splice, slice 
// slice --> (a,b) includes a and excludes b
console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr);

// splice --> (a,b) includes a and includes b
const myn2 = myArr.splice(1,3)
console.log(myn2)

