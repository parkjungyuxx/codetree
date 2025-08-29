const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.

if (str1.length !== str2.length){
 return console.log("No")
} 

const newStr1 = str1.split("").sort().join("")
const newStr2 = str2.split("").sort().join("")

if (newStr1 === newStr2) {
    console.log("Yes")
} else {
    console.log("No")
}