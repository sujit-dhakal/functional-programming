// higher order functions are those function that takes one ore more function as argument and returns a function
// use map reduce filter generally

numbers = [1,2,3,4,5]

squareofNumbers = numbers.map((num)=>num**2)

console.log(squareofNumbers)

// same program manually

const square = (num)=>(num**2)

const squareofNumbers = (square,numbers)=>{
    new_numbers = []
    for(i in numbers){
        num = square(i)
        new_number.append(i)
    }
    return new_numbers
}

output = squareofNumbers(square,[1,2,3,4])

console.log(output)

