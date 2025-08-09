const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

const add = (a, c) => {
    const result = a+c
    return console.log(`${a} + ${c} = ${result}`)
}

const subtract = (a, c) => {
    const result = a-c
    return console.log(`${a} - ${c} = ${result}`)
}

const multiply = (a, c) => {
    const result = a*c
    return console.log(`${a} * ${c} = ${result}`)
}

const divide = (a, c) => {
    const result = a/c
    return console.log(`${a} / ${c} = ${result}`)
}

switch (o) {
    case "+" :
        add(a,c)
        break;
    case "-" :
        subtract(a,c)
        break;
    case "*" :
        multiply(a,c)
        break;
    case "/" :
        divide(a,c)
        break;
    default :
        console.log("False")
}