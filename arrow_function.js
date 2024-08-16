function normalFunc(num1, num2) {
  console.log("This is normal function");
}

/* arrow function */

let arrowFunction = (num1) => {
  console.log("This is arrow function");
};

normalFunc();
arrowFunction();

// let arrowFunction = num1 => {return (num1)}

let sum = (num1, num2, ...rest) => {
  // console.log(rest);
  let finalSum = 0;
  finalSum += num1;
  finalSum += num2;

  for (let value of rest) {
    // console.log(value);
    finalSum += value;
  }
  console.log(`The final sum is ${finalSum}`);
}


sum(1,2,3,4,5)


/* 
    Task - 

    wap that takes a input and print the positivity of that input as a result 

    findPositivity(0) => This is 0
    findPositivity(-1) => This is negative
    findPositivity(1) => This is positive
    findPositivity("hello") => This is invalid

*/


/* 
    Create a Calculator

    two input field
    different arithmetic operation (+,-,*,/)
    result...

*/