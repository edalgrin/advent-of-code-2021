/*
 * DAY #5
 */

import reportRaw from "./day5-input";

// const reportRaw = `
// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2
// `;

const report = reportRaw.trim().split(/\r?\n/); // input array

let memo = [];

report.forEach((item) => {
  const coords = item.split(/,|\s->\s/);
  const x = parseInt(coords[0]);
  const y = parseInt(coords[1]);
  const x1 = parseInt(coords[2]);
  const y1 = parseInt(coords[3]);

  const hor = x === x1;
  const ver = y === y1;
  const dia = Math.abs(x - x1) === Math.abs(y - y1);

  if (hor || ver || dia) {
    let a, b, c, d, s, checkX, checkY;

    if (hor) {
      a = Math.min(y, y1);
      b = Math.max(y, y1);
      checkX = x;
    } else if (ver) {
      a = Math.min(x, x1);
      b = Math.max(x, x1);
      checkY = y;
    } else {
      if (x < x1) {
        a = x;
        b = x1;
        c = y;
        d = y1;
      } else {
        a = x1;
        b = x;
        c = y1;
        d = y;
      }
      s = c < d ? 1 : -1;
    }

    // fill the line
    for (let i = a; i <= b; i++) {
      if (hor) {
        checkY = i;
      } else if (ver) {
        checkX = i;
      } else {
        checkX = i;
        checkY = c + (i - a) * s;
      }

      // check the saved
      // possible optimization: replace the memo with a reduced array of the line/zone
      let replaced = false;
      for (let j = 0; j < memo.length; j++) {
        if (memo[j].x === checkX && memo[j].y === checkY) {
          memo[j].count = memo[j].count + 1;
          replaced = true;
          break;
        }
      }

      if (!replaced) {
        memo.push({
          x: checkX,
          y: checkY,
          count: 1,
        });
      }
    }
  }
});

console.log("%cDAY 5B", "color:green");
console.log(memo.filter((arrayItem) => arrayItem.count > 1).length);
console.log("\n");
