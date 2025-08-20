const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

const sum = a * b * c
const result = sum.toString().split("").map(Number).reduce((acc,num) => acc + num, 0)

console.log(result)