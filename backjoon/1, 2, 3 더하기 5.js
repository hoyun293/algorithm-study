const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let N = Number(input[0]);
let dp = new Array(100001).fill(0).map(_ => new Array(4).fill(0));

let R = 1000000009;
dp[1][1] = 1;
dp[1][2] = 0;
dp[1][3] = 0;

dp[2][1] = 0;
dp[2][2] = 1;
dp[2][3] = 0;

dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for(let i = 4; i <= 100000; i++) {
    dp[i][1] = (dp[i - 1][2] % R + dp[i - 1][3] % R) % R;
    dp[i][2] = (dp[i - 2][1] % R + dp[i - 2][3] % R) % R;
    dp[i][3] = (dp[i - 3][1] % R + dp[i - 3][2] % R) % R;
}

for(let i = 1; i <= N; i++) {
    let idx = Number(input[i]);
    if(idx === 1 || idx === 2) {
        console.log(1);
    } else if(idx === 3) {
        console.log(3);
    } else {
        console.log((dp[idx][1] + dp[idx][2] + dp[idx][3]) % R);
    }
}