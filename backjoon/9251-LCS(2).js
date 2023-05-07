const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str1 = input[0].trim().split('');
let str2 = input[1].trim().split('');

let n = str1.length;
let m = str2.length;

let dp = new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0));

str1.unshift(0);
str2.unshift(0);
for(let i = 0; i <= n; i++) {
    for(let j = 0; j <= m; j++) {
        if(i === 0 || j === 0) {
            dp[i][j] = 0;
            continue;
        }
        if(str1[i] === str2[j]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
}

console.log(dp[n][m]);