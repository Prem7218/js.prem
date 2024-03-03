// singleton :- Object.create()
// Or Constructer Method.

// Object Litral's

// Symbol..
const mysym = Symbol("key")
const jsUser = {
    name: "Prem",
    "full name": "Prem Mahajan",
    [mysym]: "mykey",
    age : 22,
    location: "Dhule",
    email: "Prem@amazon.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday"," saturday", "Thursday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser.mysym)
// console.log(typeof  jsUser.mysym)

// console.log(jsUser[mysym])
// console.log(typeof jsUser[mysym])

// jsUser.email = "Prem@amazon.com"
//console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.email = "Prem@chatGpt.com"
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello Js User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())