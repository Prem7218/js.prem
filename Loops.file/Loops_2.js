// Loops :- 

// const myCoding1 = [
//     {
//         lname: 'JavaScript',
//         lfile: "JS"
//     },
//     {
//        lname: "Java",
//        lfile: "JAVA"
//     },
//     {
//         lname: 'CPP',
//         lfile: 'C++'
//     },
//     {
//         lname: 'Python',
//         lfile: 'Py'
//     }
// ]

// const myCoding = ['Js', 'Ruby', 'CPP', 'JAVA', "Go Long"]

// Without Return it Gets Undefind Because Its Refrance Is Only Between Function
// But After Return he Gets Undefiend This Feature Not Provide By Js Developes.
// const val = myCoding.forEach((item) => {
//     return item;
// })
// console.log(val)


// Filter Is When We Get Specific Part Of Array.

// { } Curly Brace Work As Scope.

// First :- 
const arr = [1,2,3,4,5,6,7,8,9,10]

// const store = arr.filter((num) => num > 4)

// Second :- 
// Because of Curly Brace :- 
// { } Curly Brace Work As Scope Then Use () Or return.

// First Technique Using Return.

// const store = arr.filter((num) => {
//     return num > 4;
// })

// Second Using ().
// Single Statment Note Use The { } Its ok.
const store = arr.filter( (num) => (num > 4))

console.log(store)
