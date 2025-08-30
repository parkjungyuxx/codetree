const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.

const filtered = forecasts.filter(el => el.includes("Rain"))

const sorted = filtered.sort((a,b) => parseInt(a[0].split("-")[0]) - parseInt(b[0].split("-")[0]))

class Weather {
    constructor(date, dayOfWeek, weather) {
        this.date = date;
        this.dayOfWeek = dayOfWeek;
        this.weather = weather
    }
}

const result = new Weather(sorted[0][0], sorted[0][1], sorted[0][2])

console.log(`${result.date} ${result.dayOfWeek} ${result.weather}`)