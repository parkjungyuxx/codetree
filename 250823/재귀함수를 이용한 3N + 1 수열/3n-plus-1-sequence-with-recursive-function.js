const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
let count = 0

const solution = (n) => {
    while(n > 1) {
        if (n % 2 === 0) {
            n = n / 2
            count++
        } else {
            n = n * 3 + 1
            count++
        }
    }
    return count
}

console.log(solution(n))