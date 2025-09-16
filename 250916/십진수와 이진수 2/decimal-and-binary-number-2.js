const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 


let num = parseInt(binaryInput,2) * 17
console.log(num.toString(2))