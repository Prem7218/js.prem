// For of Loop :-
// We Can Use This Loop On any One Obj Or string Or array's.
// const arr = [1,2,3,4,6]

// // Iterator is Var name:-
// for (const iterator of arr) {
//     console.log(iterator)
// }

// Using Loops :-
// const greeting = "Hello World!"

// for(const i of greeting)
// {
//     console.log(`Each Char is ${i}`)
// }


// We Can set any Value In map.
const map = new Map()
map.set(1,"Mumbai",)
map.set(2,"Buldana")

//console.log(map)

// [ i, m ] is Destructure.
// for(const [i, m] of map)
// {
//     console.log(i," ",m)
// }

// Object Is Not Itratable Using Loop.
// const myObj = {
//     "Game1": "Footboll",
//     'Game2': "Batboll"
// }

// for(const [i, m] of myObj)
// {
//     console.log(i," ",m)
// }


// For Each loops Comes With Iterative, index , arr;
const coding = ['Js', 'Ruby', 'CPP', 'JAVA', "Go Long"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((i,index,arr) => {
//     console.log(i,index,coding)
// })


// Storing Obj In Array.
const myCoding = [
    {
        lname: 'JavaScript',
        lfile: "JS"
    },
    {
       lname: "Java",
       lfile: "JAVA"
    },
    {
        lname: 'CPP',
        lfile: 'C++'
    },
    {
        lname: 'Python',
        lfile: 'Py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.lname)
})



