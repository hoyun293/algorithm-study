const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let series = input[1].split(' ');
series = series.map(e => +e);

let prevPos;
let flag = true;
// 뒤에서 부터 오름차순인지 확인한다.
for(let i = series.length - 1; i >= 1; i--) {
    if(series[i] > series[i - 1]) {
        prevPos = i - 1;
        flag = false;
        break;
    }
}

// 뒤에서 부터 오름차순인 경우
if(flag === true) {
    console.log(-1);
    return;
}

// 오름차순이 되지 않은 위치의 뒤에서 오름차순이 되지 않은 값보다 크지만 가장 작은 값을 구한다.
let min = series[prevPos + 1];
let pos = prevPos + 1;
for(let i = prevPos + 2; i < series.length; i++) {
    if(min > series[i] && series[prevPos] < series[i]) {
        min = series[i];
        pos = i;
    }
}

// 오름차순이 되지 않은 값과 위에서 구한 값의 위치를 변경한다.
let temp = series[prevPos];
series[prevPos] = series[pos];
series[pos] = temp;

// 오름차순이 되지 않은 위치의 오른쪽 부분을 정렬한다.
let sortedSeries = series.splice(prevPos + 1).sort((a, b) => a - b);
let ansSeries = [...series, ...sortedSeries];
let ans = ''
for(let i = 0; i < ansSeries.length; i++) {
    ans += ansSeries[i] + ' ';
}
console.log(ans)