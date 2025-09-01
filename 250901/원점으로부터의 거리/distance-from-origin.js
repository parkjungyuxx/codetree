const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.

const maped = points.map((el,i) => [Math.abs(el.reduce((a,b) => a+b,0)),i+1])
const sorted = maped.sort((a,b) => a[0] - b[0])

for (let index of sorted) {
    console.log(index[1])
}