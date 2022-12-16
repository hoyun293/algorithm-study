const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

// 입력
let N = Number(input[0]);
let cables = new Array(500 + 1).fill(0);
for(let i = 1; i <= N; i++) {
    let [from, to] = input[i].split(' ');
    cables[Number(from)] = Number(to);
}

let connectedCables = [];
connectedCables.push(0); //index 1부터 사용하기 위한 dummy

for(let i = 1; i <= 500; i++) {
    if(cables[i] !== 0) {
        connectedCables.push(cables[i]);
    }
}
let length = connectedCables.length;
let dp = new Array(length).fill(0);
// 가장 긴 증가하는 부분 수열을 찾는다.
dp[1] = 1;
for(let i = 2; i <= 500; i++) {
    for(let j = 1; j < i; j++) {
        if(connectedCables[i] > connectedCables[j] && dp[j] >= dp[i]) {
            dp[i] = dp[j] + 1;
        }
    }
    if(dp[i] === 0) {
        dp[i] = 1;
    }
}

let maxi = -1;
for(let i = 1; i < dp.length; i++) {
    if(maxi < dp[i]) {
        maxi = dp[i];
    }
}
// index 0은 제외하기 위해 마지막에 1을 뺸다
console.log(connectedCables.length - maxi - 1);
