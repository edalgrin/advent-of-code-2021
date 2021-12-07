/*
 * DAY #4
 */

import reportRaw from "./day4-input";

// const reportRaw = `
// 7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

// 22 13 17 11  0
//  8  2 23  4 24
// 21  9 14 16  7
//  6 10  3 18  5
//  1 12 20 15 19

//  3 15  0  2 22
//  9 18 13 17  5
// 19  8  7 25 23
// 20 11 10 24  4
// 14 21 16 12  6

// 14 21 17 24  4
// 10 16 15  9 19
// 18  8 23 26 20
// 22 11 13  6  5
//  2  0 12  3  7
// `;

const report = reportRaw
  .trim()
  .replace(/ +(?= )/g, "")
  .split(/\n\n/);
const draws = report[0].split(",");
const boards = [];

for (let i = 1; i < report.length; i++) {
  report[i].split(/\n/).forEach((line, y) => {
    line
      .trim()
      .split(" ")
      .forEach((value, x) => {
        const draw = {
          board: i - 1,
          x,
          y,
          value,
          draw: false,
        };
        boards.push(draw);
      });
  });
}

const check = (array) => {
  let arrayFlag = true;
  for (let l = 0; l < array.length; l++) {
    if (!array[l].draw) {
      arrayFlag = false;
      break;
    }
  }
  return arrayFlag;
};

const calculate = (board, winner) => {
  let score = 0;
  const scoreArray = boards.filter(
    (arrayItem) => arrayItem.board === board && arrayItem.draw === false
  );
  scoreArray.forEach((scoreItem) => {
    score += parseInt(scoreItem.value);
  });

  console.log("%cDAY 4", "color:green");
  console.log(score * winner);
  console.log("\n");
};

for (let j = 0; j < draws.length; j++) {
  let found = false;
  boards.forEach((pick) => {
    if (pick.value === draws[j]) {
      pick.draw = true;
      if (j > 4) {
        const row = boards.filter(
          (boardItem) =>
            boardItem.board === pick.board && boardItem.x === pick.x
        );
        if (check(row)) {
          found = true;
          calculate(row[0].board, draws[j]);
        } else {
          const column = boards.filter(
            (boardItem) =>
              boardItem.board === pick.board && boardItem.y === pick.y
          );
          if (check(column)) {
            found = true;
            calculate(column[0].board, draws[j]);
          }
        }
      }
    }
  });
  if (found) {
    break;
  }
}
