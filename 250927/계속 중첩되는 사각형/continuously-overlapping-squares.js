const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let idx = 0;
const n = input[idx++];

const OFFSET = 100;        
const SIZE = 201;          
const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

for (let i = 0; i < n; i++) {
  let x1 = input[idx++] + OFFSET;
  let y1 = input[idx++] + OFFSET;
  let x2 = input[idx++] + OFFSET;
  let y2 = input[idx++] + OFFSET;

  const color = (i % 2 === 0) ? 1 : 2; 

  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      board[x][y] = color; 
    }
  }
}

let blue = 0;
for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    if (board[x][y] === 2) blue++;
  }
}

console.log(blue);
