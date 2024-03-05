// Arrow Function's 2015 Introduce. :-
// This Referse To Current Context. :-

// If We Use Curly {} Brace Then Always Get Use The Return Keyword. :- 

// If We Use Parenthesis () Then Get Not The Use Return Keyword Is Always Ok. :- 

const user = {
    username: "Prem",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}`,`Welcome To Website`)
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Ram"
// console.log()
// user.welcomeMessage()


// Browser Inbetween Golbal Object Is Window Object :-
//  But This Show :-  {}
//console.log(this)


// This Is Not Work In Function :-
// function chai()
// {
//     let username = "Prem Mahajan"
//     console.log(this.username)
// }
// chai()

// Store Function In Variable :-
// const chai = function() 
// {
//     let username = "Prem Mahajan"
//      console.log(this.username)
// }
//chai()


// Below Is Arrow Function :-
// Expicit Return :-
// const addTwo = () => {
//     let name = "Prem"
//     console.log(this)
//     return num1 + num2;
// }
//console.log(addTwo(1,2))

// Implicit Return In Arrow Function :-  Type one :-
// const addTwo = (num1, num2) =>
// num1 + num2

// Function : Type Two :-

// If We Use Curly {} Brace Then Always Get Use The Return Keyword. :- 


const addTwo = (num1,num2) =>

console.log(addTwo(1,2))



