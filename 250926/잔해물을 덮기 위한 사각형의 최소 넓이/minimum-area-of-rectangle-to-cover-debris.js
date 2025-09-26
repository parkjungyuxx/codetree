const OFFSET = 1000;
const MAX_R = 2000;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = 2;
const rects = input.slice(0, n).map(line => line.split(' ').map(Number));

let checked = Array.from(Array(MAX_R + 1), () => Array(MAX_R + 1).fill(0));

rects.forEach((rect, index) => {
    let [x1, y1, x2, y2] = rect;
    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;
    
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            checked[x][y] = index + 1;
        }
    }
});

let min_x = MAX_R, max_x = 0, min_y = MAX_R, max_y = 0;
let firstRectExist = false;
for (let x = 0; x <= MAX_R; x++) {
    for (let y = 0; y <= MAX_R; y++) {
        if (checked[x][y] === 1) {
            firstRectExist = true;
            min_x = Math.min(min_x, x);
            max_x = Math.max(max_x, x);
            min_y = Math.min(min_y, y);
            max_y = Math.max(max_y, y);
        }
    }
}

let area;
if (!firstRectExist) {
    area = 0;
} else {
    area = (max_x - min_x + 1) * (max_y - min_y + 1);
}

console.log(area);
