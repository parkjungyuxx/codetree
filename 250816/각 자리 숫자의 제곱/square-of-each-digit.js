const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.

n = n.toString().split("").map(Number)

const result = n.reduce((acc,num) => acc+num**2, 0)

console.log(result)