const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let n = Number(input[0]);
let C = 10007;
let dp = new Array(n + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for(let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] % C + dp[i - 1] % C) % C;
}

console.log(dp[n]);