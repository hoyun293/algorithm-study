const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = +input[0];
let R = 10007;
let dp = new Array(N+1).fill(0).map(_ => new Array(10).fill(0));


dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;
dp[1][3] = 1;
dp[1][4] = 1;
dp[1][5] = 1;
dp[1][6] = 1;
dp[1][7] = 1;
dp[1][8] = 1;
dp[1][9] = 1;

for(let i = 2; i <= N; i++){
    for(let j = 0 ; j <= 9; j++){
        let sum = 0;
        for(let k = 0; k <= j; k++){
            sum += dp[i-1][k] % R;
        }
        dp[i][j] = sum % R;
    }
}

let ans = 0;
for(let i = 0 ; i <= 9; i++){
    ans += (dp[N][i] % R);
}
console.log(ans % R);