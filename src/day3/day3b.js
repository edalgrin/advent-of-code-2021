/*
 * DAY #3b
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

const report = reportRaw.trim().split(/\r?\n/); // input array
const reportInputLength = report[0].split("").length; // 5 digits

const calculate = (inputArray, sign) => {
  let result = [...inputArray];
  // for each digit
  for (let k = 0; k < reportInputLength; k++) {
    let digit1 = [];
    let digit0 = [];
    // for each line
    for (let i = 0; i < result.length; i++) {
      const reportLine = result[i].split(""); //[1,0,1,0,0]
      if (reportLine[k] === "1") {
        digit1.push(result[i]);
      } else {
        digit0.push(result[i]);
      }
    }
    if (sign === "-") {
      if (digit1.length < digit0.length) {
        result = [...digit1];
      } else {
        result = [...digit0];
      }
    } else {
      if (digit1.length >= digit0.length) {
        result = [...digit1];
      } else {
        result = [...digit0];
      }
    }
    // stop if result is found
    if (result.length === 1) {
      break;
    }
  }
  return result;
};

let oxy = calculate(report);
let co2 = calculate(report, "-");

const oxyDec = parseInt(oxy.join(""), 2);
const co2Dec = parseInt(co2.join(""), 2);

console.log("%cDAY 3b", "color:green");
console.log(oxyDec * co2Dec);
console.log("\n");
