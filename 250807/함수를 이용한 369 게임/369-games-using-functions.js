const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

let count = 0

const count369 = (i) => {
    const string = i.toString()
    if (string.includes("3") || string.includes("6") || string.includes("9")) {
        return true
    }
}

const count3 = (i) => {
    if (i % 3 === 0) {
        return true
    }
}

const solution = () => {
    for (let i = A; i <= B; i++) {
        if (count369(i) || count3(i)) count++
    }
}

solution()

console.log(count)