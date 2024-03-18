// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task.
//     // DB calls, Cryptography, network.
//     setTimeout(() => {
//         console.log("Hello Prem");
//         resolve()
//     },1000)
// })

// promiseOne.then(() => {
//     console.log("Promise Consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Second Time Hello Prem")
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("Second Time Complete...")
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: "Prem Mahajan", email: "premradheshyammahajan@gmail.com"})
//     }, 1000)
// });

// promiseThree.then((user) => {
//     console.log(user);
// });


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error)
//         {
//             resolve({username: 'Prem Mahajan', pass: "1221"})
//         }
//         else {
//             reject("Something is wrong")
//         }
//     }, 1000);
// });

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// });


// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = ture;
//         if(!error) {
//             resolve({
//                 username: "Javascript", password: "123"
//             });
//         }
//         else {
//             reject('Error: Js Went Wrong...')
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();