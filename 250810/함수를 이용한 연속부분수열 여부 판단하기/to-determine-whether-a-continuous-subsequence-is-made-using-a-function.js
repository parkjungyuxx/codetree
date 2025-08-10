const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
let sliced;
for (let i = 0; i < a.length; i++) {
    if (a[i] === b[0]) {
        sliced = a.slice(i, b.length+i)
    }
}
const result = []
for (let i = 0; i < sliced.length; i++) {
if (sliced[i] === b[i]) {
    result.push(0)
} else {
    result.push(1)
}
}

if (result.includes(1)) {
    console.log("No")
} else {
    console.log("Yes")
}