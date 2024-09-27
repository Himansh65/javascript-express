const marvel_heroes = ["thor", "IronMan", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const newArr = marvel_heroes.concat(dc_heroes)
// console.log(newArr);

// spread (...)
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);


// flat is used to return new array with single array elements
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// isArray check array or not
console.log(Array.isArray("Hitesh"))
// from -> to create array
console.log(Array.from("Hitesh"))
// create empty array
console.log(Array.from({ name: "hitesh" }))  // interesting



// Array.of -> used to create a store variable array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

