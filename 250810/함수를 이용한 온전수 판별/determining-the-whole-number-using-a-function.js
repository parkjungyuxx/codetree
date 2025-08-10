const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

let count = 0;
const conditionA = (i) => {
    if (i % 2 === 0) return true
}

const conditionB = (i) => {
    if ()
}

for (let i = a; i <= b; i++) {
    if (i % 2 !== 0 && i.toString()[1] !== 5 && (i % 3 !== 0 && i % 9 === 0)) {
        count++
    }
}

console.log(count)