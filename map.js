let array = [2, 4, 5, 6]
let doubleArray = [...array].map((el) => {
    return el * 3
})

// doubleArray.map((el) => {
//     return el
// })


console.log(doubleArray);


/* 
    map function

        returns new array of exact same length of old array

*/

// doubleArray

// console.log(doubleArray); // 4, 8, 10
