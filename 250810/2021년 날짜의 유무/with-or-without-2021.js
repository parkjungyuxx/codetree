const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.
const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

const solution = (m,d) => {
    if (daysInMonth[m+1] > d) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

solution(m,d)