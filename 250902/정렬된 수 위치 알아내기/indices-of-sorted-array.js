const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const pairs = arr.map((el, i) => [el, i])

pairs.sort((a,b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

const result = Array(n)

for (let i = 0; i < n; i++) {
    const originalIndex = pairs[i][1]
    result[originalIndex] = i + 1
}

console.log(result.join(" "))