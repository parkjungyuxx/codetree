const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
let count = 0

const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true 
}

const isEven = (num) => {
    const string = num.toString()
    const a = string[0]
    const b = string[1]
    if ((parseInt(a) + parseInt(b)) % 2 === 0) return true
    else return false
}

for (let i = A; i <= B; i++) {
    if (isPrime(i) && isEven(i)) {
        count++
    }
}

console.log(count)