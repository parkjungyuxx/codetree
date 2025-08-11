const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

const result = arr.map((el) => Math.abs(el))

console.log(result.join(" "))