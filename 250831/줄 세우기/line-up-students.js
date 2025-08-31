const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

// Please Write your code here.


students.sort((a,b) => {
    if (a[0] === b[0]) {
        if (a[1] === b[1]) {
            return a[2] - b[2]
        } return b[1] - a[1]
    } return b[0] - a[0]
})

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i][0]} ${students[i][1]} ${students[i][2]}`)
}