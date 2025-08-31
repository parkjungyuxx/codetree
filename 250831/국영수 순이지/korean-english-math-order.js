const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.
const newData = rawStudentData.map((el) => el.split(" "))

newData.sort((a,b) => {
    if (a[1] !== b[1]) {
        return b[1] - a[1]
    } else {
        if (a[2] !== b[2]) {
            return b[2] - a[2]
        } else {
            return b[3] - a[3]
        }
    }
})

for (let i = 0; i < newData.length; i++) {
    console.log(`${newData[i][0]} ${newData[i][1]} ${newData[i][2]} ${newData[i][3]}`)
}