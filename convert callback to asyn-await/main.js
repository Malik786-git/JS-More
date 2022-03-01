// simple example

const { worker } = require("cluster")

// const sumNumbers = (sumHere)=>{
//     sumHere(5, 1);
// }

// sumNumbers((num1, num2)=>{
//        console.log( num1+num2 );
// });

///////////////////////////////////////////////
// first understand how promises workes.

// let myPromises = new Promise((res, rej)=>{
//     let isDbResponse = true;
//     if (isDbResponse) {
//         res('data fetch..')
//     }else{
//         rej('error 404')
//     }
// })

// myPromises.then((result)=>{
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

/////////////////////////////////////////
// now understand fetch api and async/await concept. 
// ref:index.html
