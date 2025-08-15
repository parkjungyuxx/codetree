const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.
let result = ""
const printNum = (n) => {
    if (n < 1) return

    result += (n + " ")
    printNum(n-1)
    result += (n + " ")
}

printNum(n)
console.log(result)