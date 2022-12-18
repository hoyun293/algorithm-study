const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let heights = [];

let isFind = false;
for(let i = 0; i < 9; i++) {
    heights.push(Number(input[i].trim()));
}

function sumCheck(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if(sum === 100) {
        return true;
    } else {
        return false;
    }
}


function recur(step, arr) {
    // 찾았으면 나머지 재귀에서도 그냥 리턴한다.
    if(isFind) {
        return;
    }

    // 7개 난쟁이를 골랐을 경우 계산시작
    if(arr.length === 7) {

        // 합이 100인 경우
        if(sumCheck(arr) === true) {
            isFind = true;
            arr.sort((a, b) => {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            })
            for(let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
        }

        return;
    } else {
        // 더이상 선택할 난쟁이가 없는 경우 그냥 리턴한다.
        if(step >= 9) {
            return;
        }
        recur(step + 1, arr);
        arr.push(heights[step]);
        recur(step + 1, arr);
        arr.pop();

    }
}

recur(0, []);