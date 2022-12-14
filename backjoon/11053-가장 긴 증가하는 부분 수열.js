const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

// 입력
let N = Number(input[0]);
let dp = new Array(N + 1).fill(0);

let numArr = input[1].split(' ');
for(let i = 0; i < numArr.length; i++) {
    numArr[i] = Number(numArr[i]);
}
// 인덱싱 일치를 위해 N+1을 맞춰준다
numArr.unshift(0);

// 첫번째 요소는 무조건 1
dp[1] = 1;

// O(N^2) 어도 큰 무리가 없다고 판단 
// 1 <= N <= 1000
for(let i = 2; i <= N; i++) {
    let isFind = false;
    for(let j = 1; j < i; j++) {
        if(numArr[i] > numArr[j]) {
            if(dp[i] <= dp[j]) {
                dp[i] = dp[j] + 1;
                isFind = true;
            }
        }
    }
    if(isFind === false) {
        dp[i] = 1;
    }
}

// 가장 큰 부분 수열을 찾는다
let maxi = -1;
for(let i = 1; i <= N; i++) {
    if(maxi < dp[i]) {
        maxi = dp[i];
    }
}

console.log(maxi);


// 선택할 때 앞의 조건(오름차순)을 고려해야하는 점이 포도주 시식, 계단 오르기와는 다른 유형인 듯 싶다.