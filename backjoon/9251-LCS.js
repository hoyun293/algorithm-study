const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

// 입력
let strArr = input[0].trim().split('');
let strArr2 = input[1].trim().split('');

let N = strArr.length;
let M = strArr2.length;
let dp = new Array(N + 1).fill(0).map((_) => new Array(M + 1).fill(0));

// 인덱스를 맞추기 위한 더미
strArr.unshift(0);
strArr2.unshift(0);

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= M; j++) {
        if(strArr[i] === strArr2[j]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
}

console.log(dp[N][M]);
