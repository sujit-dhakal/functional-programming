// a monad is a functor that provides a flapmap operation
// helps to compose type lifting functions

// type lifting functions are functions that wrap a value inside some context.

const repeattwice = (x)=>[x,x]

console.log(repeattwice(2))

const setWithSquared = (x)=> Set(x**2)

console.log(setWithSquared)


let arr = [[1],[2],[3],[4]]

const squareOfArr = arr.flatMap(x=>x*2)

console.log(squareOfArr)

// at first the arr is mapped and returned [[2],[4],[6],[8]] and then flatened [2,4,6,8]

