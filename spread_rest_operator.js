//spread operator

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = [...array1, ...array2, 7, 8];

// console.log(newArray)

// rest operator

function sum(num1, num2, ...rest) {
  // console.log(rest);
  let finalSum = 0;
  finalSum += num1;
  finalSum += num2;

  for (let value of rest) {
    // console.log(value);
    finalSum += value
  }
  console.log(`The final sum is ${finalSum}`);
}

// sum(1,2) // 3
// sum(1,3) // 4
sum(1, 2, 3, 4); //
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //
