const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.

const sorted = personLines.sort()

const [name, address, city] = sorted[sorted.length-1].split(" ")

class Result {
    constructor (name, address, city) {
        this.name = name;
        this.addr = address;
        this.city = city
    }
}

const result = new Result(name, address, city)

for (let ch in result) {
    console.log(`${ch} ${result[ch]}`)
}