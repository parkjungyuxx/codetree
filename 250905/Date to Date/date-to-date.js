const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const daysOfMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]
let result = 1
while (true) {
    if (m1 === m2 && d1 === d2) {
        break
    }

    result +=1
    d1 += 1

    if (d1 > daysOfMonth[m1]) {
        m1 += 1
        d1 = 1
    }
} 

console.log(result)