/*
 * DAY #1B
 */

import report from "./day1-input";

// const report = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const measurementGroupSize = 3;
let counter = 0;

for (let i = 0; i < report.length - measurementGroupSize; i++) {
  let sumA = 0;
  let sumB = 0;
  for (let j = 0; j < measurementGroupSize; j++) {
    sumA = sumA + report[i + j];
    sumB = sumB + report[i + j + 1];
  }
  if (sumB > sumA) {
    counter = counter + 1;
  }
}

console.log("%cDAY 1B", "color:green");
console.log(counter);
console.log("\n");
