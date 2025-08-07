const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let sum = 0

for (let i = 0; i <= n; i++) {
    sum += i
}

const result = Math.floor(sum / 10)

console.log(result)