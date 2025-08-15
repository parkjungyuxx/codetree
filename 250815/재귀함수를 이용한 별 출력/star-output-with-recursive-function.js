const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

let i = n - 1

const printStars = (n) => {
    if (i < 0) return
    if (n === 1) {
        console.log("*")
        return
    }

    console.log("*".repeat(n-i))
    i -= 1
    printStars(n)

}

printStars(n)