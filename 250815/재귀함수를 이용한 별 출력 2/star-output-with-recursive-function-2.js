const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

const printStars = (n) => {
    if (n < 1) return

    console.log("* ".repeat(n))
    printStars(n-1)
    console.log("* ".repeat(n))
}

printStars(n)