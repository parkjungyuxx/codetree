const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

const arr = Array.from({length: n+1}, () => 0)

for (let i = 0; i < k; i++) {
    const [start, end] = segments[i]
    arr[start-1] += 1
    if (end < n) {
        arr[end] -= 1
    }
}

let max = 0
let current = 0

for (let i = 0; i < n; i++) {
    current += arr[i]
    if (current > max) {
        max = current
    }
} 

console.log(max)