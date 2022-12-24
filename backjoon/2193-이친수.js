const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let N = Number(input[0].trim());

if(N === 1 || N === 2) {
    console.log(1);
} else {
    let dp = new Array(N + 1).fill(0);
    dp[1] = 1n;
    dp[2] = 1n;
    for(let i = 3; i <= N; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    console.log(dp[N].toString());
}

// 규칙성으로 DP점화식을 만들게 되었는데
// 다른 분들의 접근방식을보니
// 마지막이 0인경우와 마지막이 01인경우로 나뉘게 되어
// 앞의 자리 수를 채울 때, dp[N-1] dp[N-2]로 채우면 되기 때문에
// dp[N] = dp[N-1] + dp[N-2]가 성립된다. 