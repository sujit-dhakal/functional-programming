// js
// immutable means cannot be modified after creation
// so if we want some change we should clone it and make some change rather than changing the original one which can cause difficulties

const products = [
    {
        id:1,
        price:200
    },
    {
        id:2,
        price:200
    }
    ]

const productsWithName = products.map((product)=>{
    const newProduct = {...product}
    console.log(newProduct)
    newProduct.name = "default"
    return newProduct
}
)

// original
console.log(products)

// cloned and modified
console.log(productsWithName)