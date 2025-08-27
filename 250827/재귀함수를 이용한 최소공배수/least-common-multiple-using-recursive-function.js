const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

const gcd = (a,b) => {
    if (b === 0) return a;
    return gcd(b, a % b)
}

const lcm = (a,b) => {
    return (a * b) / gcd(a,b)
}

const solution = (n) => {
    if (n === 1) return numbers[n-1]

    return lcm(solution(n-1), numbers[n-1]) 
}

console.log(solution(n))