const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

const a1 = a * 60 + b
const b1 = c * 60 + d

const result = b1 - a1

console.log(result)