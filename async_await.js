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
      const taskSecond = true;
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


async function AllTask() {
  try {
    let task1Result = await task1();
    console.log(task1Result);

    let task2Result = await task2();
    console.log(task2Result);

    let task3Result = await task3();
    console.log(task3Result);

    let task4Result = await task4();
    console.log(task4Result);
    console.log("All tasks completed");
  } catch (error) {
    console.error(error);
  }
}

AllTask();
