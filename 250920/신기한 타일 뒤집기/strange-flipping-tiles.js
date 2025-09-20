const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = +input[0];

let num = 0;
let minNum = 0;
let maxNum = 0;
let prevDir = '';

for (let i = 1; i <= n; i++) {
  const [xStr, d] = input[i].trim().split(' ');
  const x = +xStr;

  if (d === 'R') {
    if (prevDir === 'R') num -= 1;
    num += x;
  } else {
    if (prevDir === 'L') num += 1;
    num -= x;
  }

  minNum = Math.min(minNum, num);
  maxNum = Math.max(maxNum, num);
  prevDir = d;
}

const white = Math.abs(maxNum - num);
const black = Math.abs(num - minNum);
console.log(white + ' ' + black);
