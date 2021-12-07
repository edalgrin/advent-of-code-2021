/*
 * DAY #2
 */

import reportRaw from "./day2-input";

// const reportRaw = `
//   forward 5
//   down 5
//   forward 8
//   up 3
//   down 8
//   forward 2
// `;

const report = reportRaw.trim().split(/\r?\n/);

let x = 0;
let y = 0;

for (let i = 0; i < report.length; i++) {
  const command = report[i].trim().split(" ");
  switch (command[0]) {
    case "forward":
      x = x + parseInt(command[1]);
      break;
    case "down":
      y = y + parseInt(command[1]);
      break;
    case "up":
      y = y - parseInt(command[1]);
      break;
    default:
      break;
  }
  // console.log(command);
}

console.log("%cDAY 2", "color:green");
console.log(x * y);
console.log("\n");
