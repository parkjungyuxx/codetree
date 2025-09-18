const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
const length = Math.max(...segments.flat())
const arr = Array(length+1).fill(0)

for (let i = 0; i < segments.length; i++) {
  const [a,b] = segments[i]
  for (let j = a; j <= b; j++) {
    arr[j]++
  }
}
console.log(Math.max(...arr))