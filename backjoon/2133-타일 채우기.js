const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
N = +N;

// N이 홀수인경우 만족하는 경우의 수가 0뿐
if(N % 2 !== 0){
    console.log(0);
    return;
}

let dp = new Array(31).fill(0);

dp[2] = 3;
dp[4] = 11;

for(let i = 3; i <= N/2; i++){
    dp[2*i] = 3*dp[2*(i-1)];
    for(let j = 2; j < 2*(i-1); j = j + 2){
        dp[2*i] += 2*dp[j];
    }
    dp[2*i] += 2;
}
console.log(dp[N]);
