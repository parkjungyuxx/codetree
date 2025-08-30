const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.
const result = new Map()

for (let i = 0; i < codenames.length; i++) {
    result.set(codenames[i], scores[i])
}

const sorted = [...result].sort((a,b) => {
    if (a[1] !== b[1]) return a[1] - b[1]
    return a[0].localeCompare(b[0])
})

console.log(`${sorted[0][0]} ${sorted[0][1]}`)