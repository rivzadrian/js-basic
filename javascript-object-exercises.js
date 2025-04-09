// ## 1. Create an Object
const person = {
    name: "John",
    age: 25,
    job: "Developer"
}

// ## 2. Access Object Properties
console.log(person.name)
console.log(person["job"])

// ## 3. Add New Property
Object.defineProperty(person,"hobby", {value: "Reading"})

// ## 4. Update Property
Object.defineProperty(person, "age", {value: 30})

// ## 5. Delete Property
delete person.job;

// ## 6. Object Inside Object
const student = {
    name : "Alice",
    grade: 90,
    address : {city: "Jakarta", country:"Indonesia"}
}

console.log(student.address.city)
