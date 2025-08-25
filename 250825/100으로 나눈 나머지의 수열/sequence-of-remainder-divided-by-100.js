const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

const arr = [2,4]

for (let i = 2; i < N; i++) {
    const num = (arr[i-2] * arr[i-1]) % 100 
    arr.push(num)
}

console.log(arr[N-1])