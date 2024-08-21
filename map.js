/* 
    map function

        returns new array of exact same length of old array

*/

// let array = [2, 4, 5, 6]
// let doubleArray = [...array].map((el) => {
//     return el * 3
// })

// doubleArray.map((el) => {
//     return el
// })

// console.log(doubleArray);

// doubleArray

// console.log(doubleArray); // 4, 8, 10

let array = [2, 3, 4, 5, 6, 7];

let doubleArray = array.map(el => {
    // console.log(el)
    return el * 5
})

console.log(doubleArray);
