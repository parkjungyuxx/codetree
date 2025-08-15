const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

const solution = (current, max) => {
   if (current > max) {
    console.log()
    return
   }

   process.stdout.write(current+" ")
   solution(current+1, max)
   process.stdout.write(current+" ")
}

solution(1, n)