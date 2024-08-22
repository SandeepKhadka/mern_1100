/* 
    Promise
     - It is an object that handles asynchronous function.
     - It solves callback hell
     - pending -> resolve, reject

*/

function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskOne = true;
      if (taskOne) {
        resolve("Task 1 is completed");
      } else {
        reject("Task 1 is not completed");
      }
    }, 2000);
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskSecond = false;
      if (taskSecond) {
        resolve("Task 2 is completed");
      } else {
        reject("Task 2 is not completed");
      }
    }, 1000);
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 is completed");
    }, 4000);
  });
}
function task4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 4 is completed");
    }, 3000);
  });
}

// callback hell

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => console.log("All tasks completed"));
//     });
//   });
// });

// console.log("All tasks completed");

// Using promise to solve callback hell

task1()
  .then((value) => {
    console.log(value);
    return task2();
  })
  .then((value) => {
    console.log(value);
    return task3();
  })
  .then((value) => {
    console.log(value);
    return task4();
  })
  .then((value) => {
    console.log(value);
    console.log("All tasks completed");
  })
  .catch((error) => console.error(error));
