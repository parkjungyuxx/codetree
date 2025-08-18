const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.

// N! = N X (N - 1)!

const solution = (N) => {
    if (N === 1) return 1

    return N * solution(N-1)
}

console.log(solution(N))