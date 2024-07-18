// Activity 1 : Function Declaration

// Task 1:
function oddEven() {
  let number = 29;
  if(number % 2 == 0) {
    console.log(number, " is even");
  } else {
    console.log(number, " is odd");
  }
}

oddEven();

// Task 2:
function squareOfNumber() {
  let number = 15;
  const square = number * number;
  return square;
}

console.log("Square is", squareOfNumber())


// Activity 2 : Function Expression

// Task 3:
const maxOfTwo = function(){
  let number1 = 4443;
  let number2 = 4444;
  if(number1 > number2) {
    console.log(number1, "is grater than", number2)
  } else if(number1 < number2) {
    console.log(number2, "is grater than", number1)
  } else {
    console.log(number1, "is equals to", number2)
  }
}
maxOfTwo();

// Task 4: 
const concatString = function() {
  let str1 = 'Alok';
  let str2 = 'Kumar';
  return str1 + " " + str2;
}
console.log(concatString())


// Activity 3 : Arrow Function

// Task 5:
const sumOfTwo = () => {
  let num1 = 248;
  let num2 = 384.5;
  return num1 + num2;
}
console.log(sumOfTwo());

// Task 6:
const stringContain = () => {
  let str = 'my name is Alok Kumar';
  let result = str.includes('e');
  return result;
}
console.log(stringContain());


// Activity 4 : Function Parameter and Default Value

// Task 7:
const productOfTwo = (number1, number2=5) => {
  return number1 * number2;
}
console.log(productOfTwo(5))

// Task 8:
const greeting = (personName, age=20) => {
  return `Hey ${personName} your age is ${age}, Welcome to the website`;
}
console.log(greeting('Alok Kumar'))


// Activity 5 : Higher Order Function

// Task 9:
const higherOrderFunction = (callingFunction, number) => {
  for(let i = 1; i<=number; i++) {
    callingFunction()
  }
}

const callingFunction = () => {
  console.log('Hello');
}

higherOrderFunction(callingFunction, 5)

// Task 10:
const higherOrderFunction2 = (function1, function2, value) => {
  const result = function2(function1(value));
  console.log(result);
}

const addition = (value) => {
  return value + 5;
}

const subtraction = (value) => {
  return value - 3;
}


higherOrderFunction2(addition, subtraction, 8)