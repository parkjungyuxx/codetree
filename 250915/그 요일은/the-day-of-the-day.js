const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

const mdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const widx = { Mon:0, Tue:1, Wed:2, Thu:3, Fri:4, Sat:5, Sun:6 };

function dayOfYear(m, d) {
  let s = 0;
  for (let mm = 1; mm < m; mm++) s += mdays[mm - 1];
  return s + (d - 1); 
}

const start = dayOfYear(m1, d1);
const end   = dayOfYear(m2, d2);
const D = end - start; 

const aIdx = widx[A];

const ans = D >= aIdx ? Math.floor((D - aIdx) / 7) + 1 : 0;
console.log(ans);