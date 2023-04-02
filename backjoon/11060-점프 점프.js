const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
N = +N;

let arr = input[1].split(' ');
arr = arr.map(e => +e);
let dp = new Array(N).fill(99999);

dp[0] = 0;

for(let i = 0; i < N; i++) {
    for(let j = 1; j <= arr[i]; j++) {
        if(i + j >= N) continue;
        if(dp[i + j] > dp[i]) dp[i + j] = dp[i] + 1;
    }
}

if(dp[N - 1] === 99999) {
    console.log(-1);
} else {
    console.log(dp[N - 1]);
}