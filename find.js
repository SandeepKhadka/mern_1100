let evenArray = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].find(el => {
  if (el > 2) {
    return true;
  }
});

let evenArray1 = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].find(el => el > 2);

console.log(evenArray);
console.log(evenArray1);


// let sum = (num) => {
//     return num
// }

let sum = num => num
console.log(sum(1))