const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.

class Product {
    constructor (id = "codetree", code = 50) {
        this.id = id;
        this.code = code;
    }
}

const prod1 = new Product();
const prod2 = new Product(prod2_id, code2);

console.log(`product ${prod1.code} is ${prod1.id}`)
console.log(`product ${prod2.code} is ${prod2.id}`)

