const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

const reversedStr = str.split("").reverse().join("")

if (str === reversedStr) {
    console.log("Yes")
} else {
    console.log("No")
}