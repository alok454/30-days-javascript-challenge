// Activity 1 : Variable Declaration

// Task 1:
var num = 5;
console.log(num);  // 5

// Task 2:
let str = 'Welcome to my world';
console.log(str);  // Welcome to my world


// Activity 2 : Constant Declaration

// Task 3:
const bool = false;
console.log(bool);  // false


// Activity 3 : Data Types

// Task 4: 
let numData = 555;
let strData = 'I am string';
let boolData = true;
let objData = {username: 'alok@jschallenge', password: 'jschallenge'};
let arrData = [34, 23, 53, 'alok', true, [1, 2, 3], {name: 'hitesh AI'}]

console.log(`type of numData is ${typeof numData}`)  // number
console.log(`type of strData is ${typeof strData}`)  // string
console.log(`type of boolData is ${typeof boolData}`)  // boolean
console.log(`type of objData is ${typeof objData}`)  // object
console.log(`type of arrData is ${typeof arrData}`)  // object


// Activity 4 : Reassigning Variables

// Task 5:
let reAssignWithLet = 243;
console.log(reAssignWithLet);  // 243

reAssignWithLet = 'alpha beta'
console.log(reAssignWithLet)  // alpha beta


// Activity 5 : Understanding const

// Task 6:
const reAssignWithCosnt = 'i am const variable'
console.log(reAssignWithCosnt)

// reAssignWithCosnt = 'now re assigning the const variable'  // Throwing Type Error: cannot reassign in constant variable
// console.log(reAssignWithCosnt)


// Feature Request

// Question 1:
let anotherNumber = 112;
let anotherString = 'Javascript';
let anotherBoolean = false;
let anotherObject = {name: 'javascript', releaseDate: 1995};
let x;
let anotherBigInt = BigInt(123456789101657676)
let anotherSymbol = Symbol('123@abc')
let y = null;

console.log(anotherNumber, typeof anotherNumber)
console.log(anotherString, typeof anotherString)
console.log(anotherBoolean, typeof anotherBoolean)
console.log(anotherObject, typeof anotherObject)
console.log(x, typeof x)
console.log(anotherBigInt, typeof anotherBigInt)
console.log(anotherSymbol, typeof anotherSymbol)
console.log(y, typeof y)

// Question 2:

// Reassigning let variable
let number = 234532;
console.log(number)  // 234532
number = 'string';
console.log(number)  // string

// Reassigning const variable
const constVariable = 34325;
console.log(constVariable)  // 34325
constVariable = 2432;
console.log(constVariable)  // TypeError : Cannot Reassign to a const variable