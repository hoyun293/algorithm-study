const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let N = Number(input[0]);
let dp = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);

dp[1] = 1;
let powArr = [1];
for(let i = 2; i <= N; i++) {

    // 1. 제곱 수로 이루어지는 수인지 확인
    let sqrtNum = Math.sqrt(i);
    let floorNum = Math.floor(sqrtNum);
    if(floorNum * floorNum === i) {
        dp[i] = 1;
        powArr.push(floorNum * floorNum);
        continue;
    }

    // 2. 제곱 수들을 이용하여 찾는다.
    for(let j = 0; j < powArr.length; j++) {
        dp[i] = Math.min(dp[i], 1 + dp[i - powArr[j]]);
    }
}
console.log(dp[N]);

// O(100,000 * 100) < O(NlogN) < O(100,000 * 1000)


/* 첫 풀이 O(N^2)

dp[1] = 1
for(let i = 2; i <= N; i++) {

    // 1. 제곱 수로 이루어지는 수인지 확인
    let sqrtNum = Math.sqrt(i);
    let floorNum = Math.floor(sqrtNum);
    if(floorNum * floorNum === i) {
        dp[i] = 1;
        continue;
    }

    // 2. 자기보다 작은 값으로 구성해서 
    for(let j = 1; j <= Math.floor(i / 2); j++) {
        dp[i] = Math.min((dp[j] + dp[i - j]), dp[i]);
    }
}
*/

/* 두번째 풀이 예외 케이스 18 내 알고리즘 4^2 + 1^2 + 1^2  정답 3^2 + 3^2 
    dp[1] = 1;
    let pow = 1;
    for(let i = 2; i <= N; i++) {

        // 1. 제곱 수로 이루어지는 수인지 확인
        let sqrtNum = Math.sqrt(i);
        let floorNum = Math.floor(sqrtNum);
        if(floorNum * floorNum === i) {
            dp[i] = 1;
            pow = floorNum * floorNum;
            continue;
        }
        // 가장 큰 제곱 수를 이용
        dp[i] = 1 + dp[i - pow];
    }
*/