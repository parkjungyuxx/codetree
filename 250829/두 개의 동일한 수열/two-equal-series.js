const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

// Please Write your code here.

const newA = a.sort()
const newB = b.sort()

const solution = () => {
    for (let i = 0; i < n; i++) {
        if (newA[i] !== newB[i]) {
            return console.log("No")
        }
    }
    return console.log("Yes")
}

solution()