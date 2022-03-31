/*
//////////////////////////////LINEAR////////////////////////////////
function sumIntegers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  }
// finding the time taken to run algorithm
  const n = 100; // The input to the function
const start = process.hrtime.bigint(); // Note the start time

const answer = sumIntegers(n); // Call the function

const end = process.hrtime.bigint(); // Note the end time

console.log(`Summing ${n} numbers took ${end - start} nanoseconds`);

// repeating the testing

const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
const N = 10000; //this changes the running time changes, increases when number is bigger

let sumOfRunningTime = 0n;

for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start = process.hrtime.bigint();

  const answer = sumIntegers(N);

  const end = process.hrtime.bigint();

  sumOfRunningTime += end - start;
}

const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);

console.log(
  `Summing ${N} numbers took an average of  ${averageTime} nanoseconds`
);
*/
//////////////////////////CONSTANT////////////////////////////
//more efficient than linear
function sumIntegers2(n) {
  return (n * (n + 1)) / 2;
}

const n = 10000; // The input to the function
const start = process.hrtime.bigint(); // Note the start time

const answer = sumIntegers2(n); // Call the function

const end = process.hrtime.bigint(); // Note the end time

console.log(`Summing ${n} numbers took ${end - start} nanoseconds`);

function splitSum1(tours) {
  // calculate the sum of all numbers in the tours array
  // and assign it to a variable named total
  const total = tours.reduce((reducer, tour) => reducer + tour);
  // initialize a variable named preSum to the value 0
  let preSum = 0;
  // initialize a variable named postSum to the value of total
  let postSum = total;
  // initialize a variable named smallest to the largest posible number
  let smallest = Number.MAX_VALUE;

  // for i = 0 to the length of tours - 1 do:
  for (let i = 0; i < tours.length - 1; i++) {
    // set preSum to the sum of preSum and tours[i]
    preSum += tours[i];
    // set postSum to postSum - tours[i]
    postSum -= tours[i];
    // find the absolute difference between preSum and postSum
    let difference = Math.abs(preSum - postSum);
    // if the difference is less than smallest then set smallest to the difference
    if (difference < smallest) smallest = difference;
  }
  // return smallest
  return smallest;
}
