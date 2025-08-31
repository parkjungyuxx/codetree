const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.


studentsInput.sort((a,b) => parseInt(a[1]) - parseInt(b[1]))

for (let i = 0; i < studentsInput.length; i++) {
    console.log(`${studentsInput[i][0]} ${studentsInput[i][1]} ${studentsInput[i][2]}`)
}