// Object Creation Singleton :-
//const olaapp = new Object()

// Below IS Non Singleton Object :-
const olaapp = {}
olaapp.id = "123abc"
olaapp.name= "Prem"
olaapp.lgin= true

//console.log(olaapp)

const regular = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "Ram",
            lastname : "Mali"
        }
    }
}

// console.log(regular.fullname)
// console.log(regular.fullname.username)
// console.log(regular.fullname?.username.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
//const obj3 = {obj1, obj2}
// First {} Then All Is Go In {}.
// If First Obj1 Then all Go In Obj1.

// Flat Our Object :-
//1) By Assign() Method.
//const obj3 = Object.assign({},obj1,obj2,obj4)

//2) By spread [ ... ] method.
//const obj3 = {...obj1, ...obj2, obj4}
//console.log(obj3)

// value comes throwes Database Looks Like Below :-
const users = [
    {
        email :"Prem@gmail.com"
    },
    {
        email :"Prem@gmail.com"
    },
    {
        email :"Prem@gmail.com"
    }
]
//console.log(users[1].email)
console.log(olaapp)

console.log(Object.keys(olaapp))
console.log(Object.values(olaapp))

// Create Every Key and Value In Is Seprate array Look 2D.
console.log(Object.entries(olaapp))

console.log(olaapp.hasOwnProperty('lgin'))

    
