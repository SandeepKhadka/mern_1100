

// console.log(
//   `price of ${projector[0].pName}-${projector[0].model} is Rs ${projector[0].price}`
// );
// console.log(
//   `price of ${projector[1].pName}-${projector[1].model} is Rs ${projector[1].price}`
// );
// console.log(
//   `price of ${projector[2].pName}-${projector[2].model} is Rs ${projector[2].price}`
// );

// alert()

// DRY - Donot Repeat Yourself

// how to make function
function greet(fName) {
  // this fName is called parameter
  console.log("Hi", fName);
}

// calling function
// greet("Ramesh") // Ramesh is an argument
// greet("Hari")
// greet()
// greet()

function printProjector(index) {
//   console.log({ index });
  console.log(
    `price of ${projector[index].pName}-${projector[index].model} is Rs ${projector[index].price}`
  );
}

// printProjector(0);
// printProjector(1);
// printProjector(2);

// Task - create a function name sum with two parameter num1 and num2 and print their sum
// The output should be like "result of {num1} and {num2} is {sum}"


function sumOne(num1, num2){
    console.log(`result of ${num1} and ${num2} is ${num1 + num2}`)
}

// function sumPrice(p1, p2, p3){
//     return p1 + p2 + p3
// }

// sumOne(1, 2)
// sumOne(3, 5)

// sumOne(1,2,3,4,4,5,6)  //...rest operator

let projector = [
  {
    pName: "viewsonic",
    model: "xyz",
    price: 10000,
  },
  {
    pName: "acer",
    model: "xyz-100",
    price: 20000,
  },
  {
    pName: "acer",
    model: "xyz-200",
    price: 50000,
  },
];

function printProjectorsPrice(price1, price2, price3){
    let sum = price1 + price2 + price3
    return sum
}

let fieldToBePrinted = "price"

console.log(projector[0].fieldToBePrinted) // undefined
console.log(projector[0][fieldToBePrinted]) // value
console.log(projector[0]["price"])


console.log("Sum is Rs",printProjectorsPrice(projector[0][fieldToBePrinted],projector[1][fieldToBePrinted], projector[2][fieldToBePrinted]))


function printIndirectlyProperty(index, field){
  console.log(`${field} is: ${projector[index][field]}`)
}


printIndirectlyProperty(0, "pName")
printIndirectlyProperty(1, "model")
printIndirectlyProperty(2, "price")