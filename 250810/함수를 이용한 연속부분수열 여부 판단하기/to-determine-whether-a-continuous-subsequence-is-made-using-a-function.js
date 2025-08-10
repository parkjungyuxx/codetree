const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
let found = false

for (let i = 0; i <= a.length - b.length; i++) {
    const sliced = a.slice(i, i + b.length)
    if (sliced.join("") === b.join("")) {
        found = true;
        break;
    }
}

console.log(found ? "Yes" : "No")