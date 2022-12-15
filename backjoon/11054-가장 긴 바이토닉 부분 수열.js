const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let N = Number(input[0]);

// 바이토닉이므로 양방향으로 가장 긴 부분 수열을 구하도록 메모제이션을 진행한다.
let inputArr = input[1].split(' ');
inputArr = inputArr.map((e) => Number(e));

let fromLeft = new Array(N).fill(0);
let fromRight = new Array(N).fill(0);
// 왼쪽부터
fromLeft[0] = 1;
for(let i = 1; i < inputArr.length; i++) {
    for(let j = 0; j < i; j++) {
        if(inputArr[i] > inputArr[j] && fromLeft[i] <= fromLeft[j]) {
            fromLeft[i] = fromLeft[j] + 1;
        }
    }
    if(fromLeft[i] === 0) {
        fromLeft[i] = 1;
    }
}

// 오른쪽부터
fromRight[N - 1] = 1;
for(let i = N - 2; i >= 0; i--) {
    for(let j = N - 1; j > i; j--) {
        if(inputArr[i] > inputArr[j] && fromRight[i] <= fromRight[j]) {
            fromRight[i] = fromRight[j] + 1;
        }
    }
    if(fromRight[i] === 0) {
        fromRight[i] = 1;
    }
}

// fromLeft 원소들 중 가장 큰 값의 위치는 왼쪽부터 오름차순으로 가장 긴 부분 수열
// fromRight 원소들 중 가장 큰 값의 위치는 오른쪽으로부터 오름차순으로 가장 긴 부분 수열
// fromLeft와 fromRight 의 동일위치의 값의 합이 가장 큰 위치가 바이토닉 부분 수열 중 가장 길이가 클 것

let maxSum = -1;
let pos;
for(let i = 0; i < N; i++) {
    if(fromLeft[i] + fromRight[i] > maxSum) {
        maxSum = fromLeft[i] + fromRight[i];
        pos = i;
    }
}
// 왼쪽으로부터 증가하는 부분 수열 길이 + 오른쪽으로부터 증가하는 부분 수열 길이 + 자기자신
let ans = fromLeft[pos] - 1 + fromRight[pos] - 1 + 1;

console.log(ans);
