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

reAssignWithCosnt = 'now re assigning the const variable'  // Throwing Type Error: cannot reassign in constant variable
console.log(reAssignWithCosnt)
