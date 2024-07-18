// Activity 1 : For Loop

// Task 1:
for(let i = 1; i<=10; i++){
  console.log(i);
}

// Task 2:
for(let i=1; i<=10; i++) {
  console.log(5, ' * ', i, ' = ', 5*i);
}


// Activity 2 : While Loop

// Task 3:
let sum = 0;
let i = 1;
while(i<11) {
  sum = sum + i;
  i++
}
console.log("Sum of 1 to 10 is ",sum);

// Task 4:
let j = 10;
while(j>0) {
  console.log(j);
  j--;
}


// Activity 3 : Do...While Loop

// Task 5:
let doWhileNumber = 1;
do {
  console.log(doWhileNumber)
  doWhileNumber++
} while(doWhileNumber<=5);

// Task 6:
let factorialInput = 6;
const copy = factorialInput;
let factorial = 1;

do {
  factorial *= factorialInput;  
  factorialInput--;
} while(factorialInput >= 1);

console.log("The factorial of ",copy, " is ", factorial);


// Activity 4 : Nested Loop

// Task 7:
let starPattern = ""
for(let i = 1; i<=5; i++) {
  for(let j=1; j<=i; j++) {
    starPattern += "*"
  }
  console.log(starPattern)
  starPattern = ""
}


// Activity 5 : Loop Control Statement

// Task 8:
for(let i = 1; i<=10; i++) {
  if(i===5) continue;
  console.log(i)
}

// Task 9:
for(let i = 1; i<=10; i++) {
  console.log(i);
  if(i==7) break;
}