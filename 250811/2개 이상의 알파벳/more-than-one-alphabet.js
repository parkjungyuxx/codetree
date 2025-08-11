const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

const result = new Set()

for (let i = 0; i < A.length; i++) {
    if (!result.has(A[i])) {
        result.add(A[i])
    }
}

if (result.size >= 2) {
    console.log("Yes")
} else {
    console.log("No")
}