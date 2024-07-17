// Activity 1 : If-Else Statement

// Task 1:
let taskNumber1 = 0;
if(taskNumber1 > 0) {
  console.log("Number is positive")
} else if(taskNumber1 < 0) {
  console.log("Number is negative")
} else {
  console.log("Number is zero")
}

// Task 2:
let personAge = 16;
if(personAge >= 18) {
  console.log("Person is eligible to vote.")
} else {
  console.log("Person is not eligible to vote")
}


// Activity 2 : Nested If-Else Statement

// Task 3:
let num1 = 1000;
let num2 = 234;
let num3 = 292;

if(num1 > num2) {
  if(num1 > num3) {
    console.log(`number 1 ${num1}, is greater`);
  } else {
    console.log(`number 3 ${num3} is greater`)
  }
} else {
  if(num2 > num3) {
    console.log(`number 2 ${num2} is greater`)
  } else {
    console.log(`number 3 ${num3} is greater`)
  }
}


// Activity 2 : Switch Case

// Task 4:
const dayNumber = 8;

switch(dayNumber) {
  case 1:
    console.log("Monday")
    break
  case 2:
    console.log("Tuesday")
    break
  case 3:
    console.log("Wednesday")
    break
  case 4:
    console.log("Thursday")
    break
  case 5:
    console.log("Friday")
    break
  case 6:
    console.log("Saturday")
    break
  case 7:
    console.log("Sunday")
    break
  default:
    console.log("Invalid day number")
}

// Task 5:
const resultScore = 55;
switch(true){
  case resultScore >= 90:
    console.log("Grade A");
    break;
  case resultScore >= 80:
    console.log("Grade B");
    break;
  case resultScore >= 70:
    console.log("Grade C");
    break;
  case resultScore >= 60:
    console.log("Grade D");
    break;
  case resultScore >= 50:
    console.log("Grade F");
    break;
  default:
    console.log("Fail");
}


// Activity 4 : Conditional(Ternary) Operator

// Task 6:
let evenOddNumber = 20
let oddEvenResult = evenOddNumber % 2 == 0 ? "Even number" : "Odd number"
console.log(oddEvenResult)


// Activity 5 : Combining Conditions

// Task 7: 
let year = 1700;
if(year % 4 == 0) {
  if(year % 100 == 0 ) {
    if(year % 400 == 0) {
      console.log("Leap year")
    } else {
      console.log("Not a leap year")
    }
  } else {
    console.log("Leap year")
  }
} else {
  console.log("Not a leap year")
}
