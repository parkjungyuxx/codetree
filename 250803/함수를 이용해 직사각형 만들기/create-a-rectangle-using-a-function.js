const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.
const printStars = () => {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j < m; j++) {
            str += "1"
        }
        console.log(str)
    }
}

printStars(n,m)