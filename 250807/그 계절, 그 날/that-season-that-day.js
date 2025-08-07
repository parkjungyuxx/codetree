const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

const isLeapYear = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true
    else return false
}

const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if (isLeapYear(year)) daysInMonth[2] = 29

if (
    day < 1 || day > daysInMonth[month]
) {
    console.log(-1)
} else {
switch (month) {
    case 3 :
    case 4 : 
    case 5 : 
        console.log("Spring")
        break
    case 6 :
    case 7 : 
    case 8 : 
        console.log("Summer")
        break
    case 9 :
    case 10 : 
    case 11 : 
        console.log("Fall")
        break
    case 12 :
    case 1 : 
    case 2 : 
        console.log("Winter")
        break

    }
}
