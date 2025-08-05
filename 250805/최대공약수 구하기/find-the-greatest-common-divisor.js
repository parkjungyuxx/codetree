const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.
const getGcd = (n,m) => {
let gcd = 1;

for (let i = 2; i <= Math.min(n,m); i++) {
    if (n % i === 0 && m % i === 0) {
        gcd = i
    }
}

return gcd
}

console.log(getGcd(n,m))