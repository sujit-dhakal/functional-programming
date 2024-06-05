// a function is said to be a pure function if it is deterministic and has no side effects

const product = [
    {
        id:1,
        price:200
    },
    {
        id:2,
        price:200
    }
]

function addName(products){
    return products.map((product)=>{
        return {...product,name:'default'}
    })
}

const productWithName = addName(product)

console.log(product)
console.log(productWithName)