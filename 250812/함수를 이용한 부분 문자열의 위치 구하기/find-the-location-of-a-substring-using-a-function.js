const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

if (text.includes(pattern)) {
    console.log(text.indexOf(pattern))
} else {
    console.log(-1)
}