// Activity 1 : Array Creation and Access

const numberArr = [1, 2, 3, 4, 5]

// Task 1:
console.log(numberArr);

// Task 2:
console.log("first element :",numberArr[0])
console.log("last element :", numberArr[4])


// Activity 2 : Array Methods (Basic)

let arr = [1, 2, 5, 3, 4];

// Task 3:
arr.push(10)
console.log(arr)

// Task 4:
arr.pop();
console.log(arr)

// Task 5:
arr.shift()
console.log(arr)

// Task 6:
arr.unshift(34)
console.log(arr)


// Activity 3 : Array Methods (Intermediate)

let oldArr = [3, 23, 28, 50, 25, 82];

// Task 7:
let newMapArray = oldArr.map((element) => element*2)
console.log(newMapArray)

// Task 8:
let newFilterArray = oldArr.filter(element => element % 2 == 0)
console.log(newFilterArray)

// Task 9:
let newReduceArray = oldArr.reduce((prev, curr) => prev+=curr)
console.log(newReduceArray)


// Activity 4 : Array Iteration

let iterateArr = [34, 523, 94, 984, 342, 294]

// Task 10:
for(element of iterateArr) {
  console.log(element)
}

// Task 11:
iterateArr.forEach((element) => {
  console.log(element)
})


// Activity 5 : Multi-dimentional Array

let twoDArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Task 12:
console.log(twoDArray)

// Task 13:
console.log(twoDArray[0][2])  // Accessing 3
console.log(twoDArray[1][1])  // Accessing 5
console.log(twoDArray[2][0])  // Accessing 7
console.log(twoDArray[0], twoDArray[1], twoDArray[2])