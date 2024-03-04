//  Scopes :- Js :-

// let one = 10
// const two = 20
// // is Always Use Globle Scope.
// var thr = 30 

// Scopes If We Use It With Function Or if_else.


// Inside if Is Block Scope.
// Let and Const are Use Both Globle as Well as Block Scope.
// if (true) {
//     let one = 20
//     const two = 30
//     var thr = 40 
// }
// console.log(one)
// console.log(two)
// console.log(thr)

// Nested Function's :-
function one() {
    const username = "prem"
    function two() {
        const website = "Github Repository...."
        console.log("Hell User In :- " +website)
    }
    //console.log(website)
    two()
}
//one()
// if(true)
// {
// // === Gewt Strict Check.
// // == Normal Check.
//     const user = "Prem"
//     if(user === "Prem")
//     {
//         const website = " Youtuber."
//         console.log(user + website)
//     } 
//     //console.log(website)
// }
// //console.log(user)

// +++++ Interasting +++++

// Function :-

// We Also Use Call To Function Above To Function Signature...
addone(5)

function addone(value)
{   return value + 1    }

// It also Function But also Knowan as Expression...

// It Shows Error Because Ist's Hosting Is Above To Declaration.

// Because it is a variable To Store Function And It Only access after Declaration. :-

//addtwo(5)

const addtwo = function(value) {    return value + 2    }

 addtwo(5)
