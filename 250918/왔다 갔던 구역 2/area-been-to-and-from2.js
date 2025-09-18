const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

const OFFSET = 1000;
const MAX_R = 2000
const segments = []

let cur = 0

for (let i = 1; i <= n; i++) {
    let [distance, direction] = input[i].split(" ")
    distance = Number(distance)

    let sectionLeft, sectionRight

    if (direction === "L") {
        sectionLeft = cur - distance
        sectionRight = cur
        cur -= distance
    } else {
        sectionRight = cur + distance
        sectionLeft = cur
        cur += distance
    }

    segments.push([sectionLeft, sectionRight])

}

const checked = Array(MAX_R + 1).fill(0)

segments.forEach(segment => {
    let [x1, x2] = segment

    x1 += OFFSET
    x2 += OFFSET

    for (let i = x1; i < x2; i++) {
        checked[i]++
    }
})

let cnt = 0

for (let elem of checked) {
    if (elem >= 2) {
        cnt += 1
    }
}


console.log(cnt)