const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let N = Number(input[0]);
let cardPacks = input[1].split(' ');
let dp = new Array(N + 1).fill(0);

// 인덱스를 맞추기 위한 더미 값
cardPacks.unshift(0);
cardPacks = cardPacks.map(e => Number(e));

// 한 장을 살 수 있는 최대 값은 고정
dp[1] = cardPacks[1];

for(let i = 2; i <= N; i++) {
    for(let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i - j] + cardPacks[j], dp[i]); // dp는 초기 값으로 0이 배정
    }
}

console.log(dp[N]);