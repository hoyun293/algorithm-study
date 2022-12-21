const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let T = Number(input[0]);

let dp = new Array(11 + 1).fill(0);

dp[1] = 1;  // 1
dp[2] = 2;  // 1+1, 2
dp[3] = 4;  // 1+1+1, 2+1, 1+2, 3

for(let i = 4; i <= 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for(let i = 1; i <= T; i++) {
    console.log(dp[Number(input[i])]);
}