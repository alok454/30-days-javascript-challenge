// Activity 1 : Template Literals

// Task 1:
let personName = "Alok Kumar";
let personAge = 21;
let templateLiterals = `Name: ${personName} & Age: ${personAge}`

console.log(templateLiterals)

// Task 2:
console.log(`Name: ${personName} \nAge: ${personAge}`);


// Activity 2 : Destructuring

// Task 3:
const arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr
console.log(a, b)

// Task 4:
const book = {
  title: "The JavaScript",
  author: "P. K. Sharma",
  year: 2023,
}

const {title, author} = book
console.log(title, author)


// Activity 3 : Spread and Rest Operators

// Task 5:
const addArray = [...arr, 23, 52, 24]
console.log(addArray)

// Task 6:
const add = function(...argument) {
  let sum = 0;
  for(element of argument) {
    sum += element
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5))


// Activity 4 : Default Parameter

// Task 7:
const product = (num1, num2=1) => {
  return num1 * num2;
}
console.log(product(320))


// Activity 5 : Enhanced Object Literals

// Task 8:
let name = "Alok Kumar"
let age = 21
const detail = function() {
  return this.name + this.age
}

const objectLiteral = { name, age, detail }
console.log(objectLiteral)

// Task 9:
let key1 = 'name'
let key2 = 'age'
let key3 = 'address'

let value1 = 'Alok'
let value2 = 21
let value3 = 'Gopalganj, Bihar'

const personDetail = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
}
console.log(personDetail)