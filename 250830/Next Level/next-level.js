const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.

class Charater {
    constructor (id = "codetree", level = 10) {
        this.id = id;
        this.level = level;
    }
}

const user1 = new Charater()
const user2 = new Charater(user_id, levelStr)

console.log(`user ${user1.id} lv ${user1.level}`)
console.log(`user ${user2.id} lv ${user2.level}`)

