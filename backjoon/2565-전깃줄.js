const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

// 입력
let N = Number(input[0]);
let cables = new Array(500 + 1).fill(0);
for(let i = 1; i <= N; i++) {
    let [from, to] = input[i].split(' ');
    cables[Number(from)] = Number(to);
}
// 위에서 아래 방향으로 -> 직전 전깃줄보다 위에 묶여있으면 안된다.
let udCnt = 0;
for(let i = 2; i <= 500; i++) {
    // 해당 위치에 전깃줄 연결이 안되어있으면 skip
    if(cables[i] === 0) {
        continue;
    }
    for(let j = 1; j < i; j++) {
        if(cables[j] === 0) {
            continue;
        }
        // 위에 묶여있으면 치워야한다.
        if(cables[i] < cables[j]) {
            udCnt++;
            break;
        }
    }
}

// 아래에서 위 방향으로 -> 직전 전깃줄보다 아래에 묶여있으면 안된다.

let duCnt = 0;
for(let i = 499; i >= 1; i--) {
    // 해당 위치에 전깃줄 연결이 안되어있으면 skip
    if(cables[i] === 0) {
        continue;
    }
    for(let j = 500; j > i; j--) {
        if(cables[j] === 0) {
            continue;
        }
        // 아래에 묶여있으면 치워야한다.
        if(cables[i] > cables[j]) {
            duCnt++;
            break;
        }
    }
}
// 위에서 아래로 갈때 치워야할 전깃줄이 더 적은지
// 아래에서 위로 갈때 치워야할 전깃줄이 더 적은지 확인한다.
console.log(Math.min(udCnt, duCnt));


// 틀린풀이 결론
// 위와 같이 겹치지 않으려면 직전보다 더 큰 값을 가져야 한다 라고 생각하였으나
// 로직을 다시 보니 내가 한 것 은 그리디로 접근을 했었다. 
// 직전보다 더 큰 값을 갖는 가장 긴 증가하는 부분수열로 연결을 이어나가지 못함.

// 아래의 반례를 찾지못함
5
3 4
1 5
4 2
2 3
5 1


