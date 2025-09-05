const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.

studentInputs.forEach((el, i, arr) => {
    arr[i] = [...el,i+1]
})

studentInputs.sort((a,b) => {
    if (a[0] === b[0]) {
       return b[1] - a[1]
    } else {
        return a[0] - b[0]
    }
})

for (let c of studentInputs) {
    console.log(...c)
}