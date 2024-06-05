// A function is said to be deterministic if given the same input it returns the same output

const joinWithComma = (names)=>names.join(', ')

console.log(joinWithComma(['ab','cd']))
console.log(joinWithComma(['ab','cd']))

// non - deterministic

console.log(Math.random())
console.log(Math.random())