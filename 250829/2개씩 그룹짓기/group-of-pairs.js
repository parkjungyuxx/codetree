const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.

const sortedNums = nums.sort((a,b) => a-b) 
const arr = []
for (let i = 0; i < n; i++) {
    arr.push(sortedNums[i] + sortedNums[sortedNums.length - i - 1])
}

console.log(Math.max(...arr))

