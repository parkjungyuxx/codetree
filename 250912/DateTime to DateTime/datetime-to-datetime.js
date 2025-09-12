const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

const startDay = 11, startHour = 11, startMin = 11

const diff = (A-startDay) * 24 * 60 + (B - startHour) * 60 + (C-startMin)

console.log (diff >= 0 ? diff: -1)