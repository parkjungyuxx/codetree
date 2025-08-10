const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

let count = 0;
const conditionA = (i) => {
    if (i % 2 === 0) return true
}

const conditionB = (i) => {
    const stringI = i.toString()
    if (stringI[1] === "5") return true 
}

const conditionC = (i) => {
    if (i % 3 === 0 && i % 9 !== 0) return true
}

for (let i = a; i <= b; i++) {
    if (!conditionA(i) && !conditionB(i) && !conditionC(i)) {
        count++
    }
}

console.log(count)