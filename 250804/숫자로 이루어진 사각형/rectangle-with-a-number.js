const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

let num = 1
for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = 0; j < N; j++) {
        if (num > 9) num -= 9
        str +=  `${String(num)} `
        num++
    }
    console.log(str)
}