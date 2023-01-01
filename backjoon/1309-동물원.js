const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let N = Number(input[0]);
const R = 9901;
let dp = new Array(N+1).fill(0).map(_ => new Array(3).fill(0));

dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;

for(let i = 2; i <= N; i++){

    // L=Left, R=Right, N=None
    // n(n) = l(n-1) + r(n-1) + n(n-1)  
    // l(n) = r(n-1) + n(n-1)
    // r(n) = l(n-1) + n(n-1)

    dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2]);
    dp[i][1] = (dp[i-1][0] + dp[i-1][2]);
    dp[i][2] = (dp[i-1][0] + dp[i-1][1]);
}

const ans = (dp[N][0] + dp[N][1] + dp[N][2])%R;

console.log(ans);