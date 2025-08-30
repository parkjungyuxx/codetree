const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class Secret {
    constructor(s_code, m_point, time) {
        this.s_code = s_code;
        this.m_point = m_point;
        this.time = time
    }
}

const meeting = new Secret(s_code, m_point, time)

console.log(`secret code : ${meeting.s_code}`)
console.log(`meeting point : ${meeting.m_point}`)
console.log(`time : ${meeting.time}`)