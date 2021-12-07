/*
 * DAY #1
 */

import report from "./day1-input";

// const report = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let counter = 0;

report.forEach((number, index) => {
  counter = counter + (index && number > report[index - 1] ? 1 : 0);
});

console.log("DAY 1");
console.log(counter);
console.log("\n");
