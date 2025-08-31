const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push([name, Number(height), Number(weight)]);
}

// Please Write your code here.

records.sort((a,b) => {
    if (a[1] === b[1]) {
        return b[2] - a[2]
    } return a[1] - b[1]
})

for (let i = 0; i < records.length; i++) {
    console.log(`${records[i][0]} ${records[i][1]} ${records[i][2]}`)
}