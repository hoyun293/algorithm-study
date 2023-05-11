const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [n, k] = input[0].split(' ');
n = +n;
k = +k;
let coins = [];
for(let i = 0; i < n; i++) {
    coins.push(+input[i + 1]);
}
let dp = new Array(k + 1).fill(0);

for(let i = 0; i <= k; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for(let j = 0; j < n; j++) {
        if(i >= coins[j]) {
            if(i - coins[j] > 0 && dp[i - coins[j]] === -1) {
                continue;
            }
            min = Math.min(min, dp[i - coins[j]] + 1);
        }
    }
    if(min !== Number.MAX_SAFE_INTEGER) {
        dp[i] = min;
    } else if(i !== 0) {
        dp[i] = -1;
    }
}

console.log(dp[k]);

