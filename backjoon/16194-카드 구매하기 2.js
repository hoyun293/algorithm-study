const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = +input[0];

let cardPacks = input[1].split(' ').map(e => +e);
let dp = new Array(N+1).fill(0);

// 인덱스 맞추기
cardPacks.unshift(0);
dp[1] = cardPacks[1];

for(let i = 2 ; i <= N; i++){
    let mini = Number.MAX_SAFE_INTEGER;
    for(let j = 1; j < i; j++){
        if(mini > dp[j] + cardPacks[i-j]){
            mini = dp[j] + cardPacks[i-j];
        }
    }
    dp[i] = Math.min(cardPacks[i], mini);
}
console.log(dp[N]);