const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

const N = Number(input[0]);

const board = new Array(N).fill(0).map(_ => new Array(N).fill(0));
let maxCount = -1;
const ROW = 0;
const COL = 1;
for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        board[i][j] = input[i + 1].split('')[j];
    }
}

function check(i, j) {
    let max = 1;
    let length = 1;
    // 행 검사
    for(let x = 0; x < N - 1; x++) {
        if(board[i][x] === board[i][x + 1]) {
            length++;
            max = Math.max(max, length);
        } else {
            length = 1;
        }
    }
    length = 1;
    // 열 검사
    for(let y = 0; y < N - 1; y++) {
        if(board[y][j] === board[y + 1][j]) {
            length++;
            max = Math.max(max, length);
        } else {
            length = 1;
        }
    }
    return max;
}

function exchange(i, j, rowColFlag) {
    if(rowColFlag === ROW) {
        // 행 교환
        let tempCandy = board[i][j];
        board[i][j] = board[i][j + 1];
        board[i][j + 1] = tempCandy;
        let cnt = check(i, j);
        maxCount = Math.max(maxCount, cnt);

        cnt = check(i, j + 1);
        maxCount = Math.max(maxCount, cnt);
        board[i][j + 1] = board[i][j];
        board[i][j] = tempCandy;
    } else if(rowColFlag === COL) {
        // 열 교환
        let tempCandy = board[i][j];
        board[i][j] = board[i + 1][j];
        board[i + 1][j] = tempCandy;
        let cnt = check(i, j);
        maxCount = Math.max(maxCount, cnt);
        cnt = check(i + 1, j);
        maxCount = Math.max(maxCount, cnt);
        board[i + 1][j] = board[i][j];
        board[i][j] = tempCandy;
    }
}

// 원래 상태에서 가장 많이 먹을 수 있는 경우를 구한다.
for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(i === j) {
            let cnt = check(i, j);
            maxCount = Math.max(maxCount, cnt);
        }
    }
}
// 변경한 상태에서 가장 많이 먹을 수 있는 경우를 구한다.
for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(i === N - 1 && j === N - 1) {
            continue;
        }
        if(i === N - 1) {
            exchange(i, j, ROW);
        } else if(j === N - 1) {
            exchange(i, j, COL);
        } else {
            exchange(i, j, ROW);
            exchange(i, j, COL);
        }
    }
}

console.log(maxCount);


// 방법은 완벽했으나 자바스크립트로 문제를 풀다보니 전혀생각못한 CASE 한 건 때문에
// 정답을 구하지 못하였다.
// i = N-1, j = N-1인 우측하단 마지막 경우에 exchage(i, j , ROW)를 실행해서 문제가 발생함
// 다른 언어라면 할당하지 않은 배열의 주소에 접근하려고 하면 segmentation fault 에러가 났을텐데
// 자바스크립트는 undefined로 읽어와서 바로 찾아내지 못하였다.
// undefined === undefined 로 로직을 타게되버려 이상한 값이 나올 수 있게 되었다


/*  아래와 같은 로직을 추가해서 해결
if(i === N - 1 && j === N - 1) {
    continue;
}
*/