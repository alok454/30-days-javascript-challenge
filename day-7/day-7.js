// Activity 1 : Object Creation and Access

// Task 1:
const bookDetail = {
  title: "The Javascript Programming Language",
  author: "MS Dhoni",
  year: 2019,
  titleAndAuthor: function(){
    return "Title: " + this.title + ", Author: " + this.author
  },
  updateYear: function(year) {
    this.year = year
  }
}
console.log(bookDetail)

// Task 2:
console.log(bookDetail.title)
console.log(bookDetail["author"])


// Activity 2 : Object Methods

// Task 3:
console.log(bookDetail.titleAndAuthor())

// Task 4:
bookDetail.updateYear(2023)
console.log(bookDetail)


// Activity 3 : Nested Objects

// Task 5:
const library = {
  name: "The JavaScript Library",
  books: [
    {
      title: "The Last Road",
      author: "JS Bose",
      year: 2005,

    },
    {
      title: "Data Structures Through C",
      author: "Yashwant P. Kanetkar",
      year: 2019,
    },
    {
      title: "The C++ Programming Language",
      author: "Bjarne Stroustrup",
      year: 2013
    },
  ]
}
console.log(library)

// Task 6:
console.log(library.name)
for(element of library.books) {
  console.log("Title:",element.title)
}


// Activity 4 : The this Keyword

// Task 7:
for(element of library.books) {
  element.titleAndYear = function() {
    return "Title: " + this.title + " Year: " + this.year
  }
}
for(element of library.books) {
  console.log(element.titleAndYear())
}


// Activity 5 : Object Iteration

// Task 8:
for(key in bookDetail) {
  console.log("Key:", key, "Value:", bookDetail[key])
}

// Task 9:
const keys = Object.keys(bookDetail)
const values = Object.values(bookDetail)
console.log("Keys:", keys)
console.log("Values:", values)