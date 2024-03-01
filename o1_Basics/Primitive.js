// JS Is dynamically Type Language.

// [ * ] Variable Value Is Which Type Store Is Work Runtime.

//  Primitive Data Types :-
// 7 types : string, Number, Boolean, null, undefiend, Symbol, BigInt.

// 1] Number :-

    const Number = 100
    const SolNumber = 100.33

// 2] Boolean 
    const isLogged = false
// 3] null
    let outside = null
// 4] Undefiend
    let userEmail;

// 5] string
    const str = '1224'

// 6] Symbol 
    const id = Symbol('1224')
    const anotherId = Symbol('1224')

    console.log(id == anotherId)

// 7] BigInt
    const bigNumber = 1234567891234563456780n

    console.log(typeof(bigNumber))


// Referance Types / Non-Primitive. 
// Types :- 
// Arrays, Object, Functions.

// 1] Array :-

    const heros = ["Prem", 123456, false, 1123.22]
    console.log(heros)

// 2] Objects :-

let myObj = 
{
    name: "Prem",
    age : 22,
    name: "Ram"
} 

console.log(myObj)
// 3] Functions :-

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof heros)






