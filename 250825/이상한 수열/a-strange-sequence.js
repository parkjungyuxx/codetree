const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.

const solution = (a) => {
    if (a === 1) return 1
    if (a === 2) return 2

    return solution(parseInt(a/3)) + solution(a-1)
}

console.log(solution(n))