const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const result = []

for (let i = 0; i < n; i+=2) {
    if (i === 0) {
        result.push(arr[0])
    } else {
    const sortedArr = arr.slice(0,i+1).sort((a,b) => a-b)
    result.push(sortedArr[Math.ceil(i/2)])
    }
}

console.log(...result)