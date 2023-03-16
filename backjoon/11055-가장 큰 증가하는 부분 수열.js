const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let nums = new Array(+input[0]).fill(0);
let series = input[1].split(' ');
series = series.map((e) => Number(e));

let biggest = -1;

for(let i = 0; i < series.length; i++) {
    biggest = 0;
    for(let j = 0; j < i; j++) {
        if(series[j] < series[i] && biggest < nums[j])
            biggest = nums[j];
    }
    nums[i] = series[i] + biggest;
}

console.log(Math.max(...nums));