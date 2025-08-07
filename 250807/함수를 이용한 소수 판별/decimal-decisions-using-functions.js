const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

let count = 0;

const sosu = (num) => {
    if (num < 2) return false
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

for (let i = A; i <= B; i++) {
    if (sosu(i)) count+=i
}

console.log(count)