/*
 * DAY #2B
 */

import reportRaw from "./day2-input";

// const reportRaw = `
//   forward 5
//   down 5s
//   forward 8
//   up 3
//   down 8
//   forward 2
// `;

const report = reportRaw.trim().split(/\r?\n/);

let x = 0;
let y = 0;
let aim = 0;

for (let i = 0; i < report.length; i++) {
  const command = report[i].trim().split(" ");
  switch (command[0]) {
    case "forward":
      const x1 = parseInt(command[1]);
      x = x + x1;
      y = y + aim * x1;
      break;
    case "down":
      aim = aim + parseInt(command[1]);
      break;
    case "up":
      aim = aim - parseInt(command[1]);
      break;
  }
  // console.log(command);
}

console.log(x * y);
