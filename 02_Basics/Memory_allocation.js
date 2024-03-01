// 1] Primitive data-Types :-
//  All Primitive Type Get use Stack Memory.
//  It Create Pass-By Value. [ Static ]

let myYoutubeName = "PremMahajan@Funchod_News"

let otherName = myYoutubeName

console.log(otherName)

// 2] Non-Primitive data-Types :-
// All Non-Primitive Type Use Heap Or Stack Memory allcation.
// It Creates Pass By Referance. [ Heap ]

let UserOne =
{
    email : "User@gmail.com",
    upiid : "User@ybl"
}

let UserTwo = UserOne

 UserTwo.email = "Prem@gmail.com"

// Change In Both
console.log(UserOne)
console.log(UserTwo)