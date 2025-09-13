const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

 const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let totalDays = 0;

    function getDays(m, d) {
        let days = 0;
        for (let i = 1; i < m; i++) {
            days += monthDays[i];
        }
        days += d;
        return days;
    }
    
    totalDays = getDays(m2, d2) - getDays(m1, d1);

    const dayIndex = (Math.abs(totalDays) % 7);
    
    let startDayIndex = 0; 
    let resultIndex = (startDayIndex + totalDays) % 7;
    
    if (resultIndex < 0) {
        resultIndex += 7;
    }

    console.log(week[resultIndex])
