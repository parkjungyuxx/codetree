const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

const solution = (n,m) => {
    [n,m] = [m,n]
    console.log(n,m)
}

solution(n,m)