const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

const getYear = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true
    else return false
}

console.log(getYear(y))