const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
let result = 0

for (let i = 0; i < queries.length; i++) {
    const splited = A.slice(queries[i][0]-1, queries[i][1])
    const sum = splited.reduce((acc,num) => acc+num, 0)
    result += sum
    console.log(result)
    result = 0
}
