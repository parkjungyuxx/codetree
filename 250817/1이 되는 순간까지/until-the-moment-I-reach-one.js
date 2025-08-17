const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let count = 0;

while (n > 1) {
    if (n % 2 === 0) {
        n = n / 2
        count++
    } else {
        n = parseInt(n / 3)
    }
}