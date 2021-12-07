/*
 * DAY #3
 */

import reportRaw from "./day3-input";

// const reportRaw = `
// 00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010
// `;

const report = reportRaw.trim().split(/\r?\n/);
const reportInputLength = report[0].split("").length;
const reportLength = report.length;

let result = new Array(reportInputLength).fill(0);

for (let i = 0; i < reportLength; i++) {
  const reportLine = report[i].split("");
  for (let j = 0; j < reportInputLength; j++) {
    result[j] = result[j] + parseInt(reportLine[j]);
  }
}

let gamma = new Array(reportInputLength).fill(0);
let epsilon = new Array(reportInputLength).fill(0);

for (let j = 0; j < reportInputLength; j++) {
  if (result[j] > reportLength * 0.5) {
    gamma[j] = 1;
  } else {
    epsilon[j] = 1;
  }
}

const gammaDec = parseInt(gamma.join(""), 2);
const epsilonDec = parseInt(epsilon.join(""), 2);

console.log(gammaDec * epsilonDec);
