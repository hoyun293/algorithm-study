const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let inputArr = input[1].split(' ');
inputArr = inputArr.map(e => +e);

let len = inputArr.length;
let dp = new Array(len).fill(0);
let seriesArr = [];
dp[0] = 1;
seriesArr[0] = [inputArr[0]];

for(let i = 1; i < len; i++) {
    let isFind = false;
    for(let j = 0; j < i; j++) {
        if(dp[j] >= dp[i] && inputArr[j] < inputArr[i]) {
            dp[i] = dp[j] + 1;
            isFind = true;
            seriesArr[i] = seriesArr[j].concat(inputArr[i]);
        }
    }
    if(isFind === false) {
        dp[i] = 1;
        seriesArr[i] = [inputArr[i]];
    }
}

// max값 찾기
let max = Number.MIN_VALUE;
let lastIdx;
for(let i = 0; i < len; i++) {
    if(max < dp[i]) {
        max = dp[i];
        lastIdx = i;
    }
}
let ans = '';
ans = seriesArr[lastIdx].join(' ');
console.log(max);
console.log(ans);

// const fs = require('fs');
// const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

// let arr = input[1].split(' ');
// let dp = new Array(arr.length).fill(0);
// let history = new Array(arr.length).fill(0);
// arr = arr.map(e => +e);

// dp[0] = 1;
// for(let i = 1; i < arr.length; i++) {
//     let isFind = false;
//     for(let j = 0; j < i; j++) {
//         if(arr[j] < arr[i]) {
//             if(dp[j] >= dp[i]) {
//                 dp[i] = dp[j] + 1;
//                 history[i] = j;
//                 isFind = true;
//             }
//         }
//     }
//     if(isFind === false) {
//         dp[i] = 1;
//     }
// }

// // 가장 큰 값 찾기
// let max = Number.MIN_SAFE_INTEGER;
// let idx = 1;
// let lastIndex = 0;
// let series = [];
// for(let i = 0; i < dp.length; i++) {
//     if(max < dp[i]) {
//         max = dp[i];
//         lastIndex = i;
//     }
// }
// // 수열 찾기
// series.push(arr[lastIndex]);
// while(dp[lastIndex] !== 1) {
//     lastIndex = history[lastIndex];
//     series.push(arr[lastIndex]);
// }
// series = series.reverse();
// let ans = series.join(' ');
// console.log(max);
// console.log(ans);

