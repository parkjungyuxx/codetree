const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

// 1 1 2 3 5 8 13
// 첫번째 인덱스랑 두번째 인덱스 더하기
// 재귀함수로 풀기

const arr = [1, 1]

const solution = (n) => {
    if (n === 1) return 1
    if (n === 2) return 1

    

    return solution(n-2) + solution(n-1)
}

console.log(solution(n))