const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.

studentData.sort((a,b) => {
    const sumA = parseInt(a[1]) + parseInt(a[2]) + parseInt(a[3])
    const sumB = parseInt(b[1]) + parseInt(b[2]) + parseInt(b[3])

    return sumA - sumB
})

for (let i = 0; i < studentData.length; i++) {
    console.log(`${studentData[i][0]} ${studentData[i][1]} ${studentData[i][2]} ${studentData[i][3]}`)
}