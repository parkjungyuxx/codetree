const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 100;
const MAX_R = 200;

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const checked = Array(MAX_R + 1).fill(null).map(() => Array(MAX_R + 1).fill(0));

rects.forEach(rect => {
    let [x1, y1] = rect;

    let x2 = x1 + 8, y2 = y1 + 8;

    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            checked[x][y] = 1;
        }
    }
});

let area = 0;
for (let x = 0; x <= MAX_R; x++) {
    for (let y = 0; y <= MAX_R; y++) {
        if (checked[x][y]) area += 1;
    }
}

console.log(area);
