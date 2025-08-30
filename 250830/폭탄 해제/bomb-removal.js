const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.

class Result {
    constructor (code, color, time) {
        this.code = code;
        this.color = color;
        this.second = time;
    }
}

const result = new Result(u_code, l_color, time);

for (let ch in result) {
    console.log(`${ch} : ${result[ch]}`)
}

