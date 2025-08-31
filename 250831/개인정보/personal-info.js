const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

// Please Write your code here.

const nameSorted = [...students].sort((a,b) => a.name.localeCompare(b.name, "en"))
const heightSorted = [...students].sort((a,b) => b.height - a.height)

console.log("name")
nameSorted.forEach((el) => console.log(`${el.name} ${el.height} ${el.weight}`))
console.log(`\nheight`)
heightSorted.forEach((el) => console.log(`${el.name} ${el.height} ${el.weight.toFixed(1)}`))