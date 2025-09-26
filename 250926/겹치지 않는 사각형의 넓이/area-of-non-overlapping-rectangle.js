const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 1000;
const MAX_R = 2000;

const n = 3;
const rects = input.slice(0, n).map(line => line.split(' ').map(Number));

const checked = Array.from({length: MAX_R + 1}, () => Array(MAX_R + 1).fill(0));

rects.forEach((rect, index) => {
    let [x1, y1, x2, y2] = rect;
    // OFFSET을 더해줍니다.
    x1 += OFFSET; y1 += OFFSET;
    x2 += OFFSET; y2 += OFFSET;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            checked[x][y] = index + 1;
        }
    }
});

let area = 0;
for (let x = 0; x <= MAX_R; x++) {
    for (let y = 0; y <= MAX_R; y++) {
        if (checked[x][y] === 1 || checked[x][y] === 2) {
            area += 1;
        }
    }
}

console.log(area);
