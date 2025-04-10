// ## 1. Create an Array

const fruit = ["Apple", "Banana", "Orange"]

// ## 2. Access Array Elements

console.log(fruit[0])
console.log(fruit[fruit.length-1])


// ## 3. Add Element to Array
fruit.push("Mango")

// ## 4. Add Element to Beginning
fruit.unshift("Grape")

// ## 5. Remove Last Element
fruit.pop()

// ## 6. Remove First Element
fruit.shift()

// ## 7. Check Array Length
console.log(fruit.length)

// ## 8. Check if Value Exists
console.log(fruit.includes("Banana"))

// ## 9. Find Element Index
console.log(fruit.indexOf("Orange"))

// ## 10. Convert Array to String
console.log(fruit.toString())