const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
const length = Math.max(...segments.flat())

const arr = Array(length+1).fill(0)

for (let i = 0; i < segments.length; i++) {
    const [start, end] = segments[i]
    for (let j = start; j < end; j++) {
        arr[j]+=1
    }
}


const max = Math.max(...arr)
console.log(max)