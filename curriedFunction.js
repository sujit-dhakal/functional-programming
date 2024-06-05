// curried functions are functions that take multiple parameters , only that one at a time

function add(a){
    return function(b){
        return a + b
    }
}

console.log(add(2)(3))

function greeting(greet){
    return function(name){
        console.log(`${greet} ${name}`)
    }
}

greeting('Hello')('name')