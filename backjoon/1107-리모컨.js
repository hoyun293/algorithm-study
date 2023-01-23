const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let target = input[0];
target = +target;

let brokenNum = input[1];
brokenNum = +brokenNum;

let brokenButtons = new Array(10).fill(false);
let inputArr;
if(brokenNum > 0){
    inputArr = input[2].split(' ');
    for(let i = 0 ; i < inputArr.length; i++){
        brokenButtons[+inputArr[i]] = true;
    }
}
let ans = abs(target-100);

// 거꾸로 접근하는 방법까지 고려
for(let i = 0 ; i < 1000000; i++){

    if(checkHasBrokenKey(i)) continue; // 해당 채널로 이동할 수 없다.

    let numLength = (i + '').length;
    ans = Math.min(ans, abs(target-i) + numLength);
}

// 버튼을 누르지 않고 방향키로 갈 수 있는 방법과 비교
ans = Math.min(ans, abs(target-100));

console.log(ans);

function checkHasBrokenKey(num){
    
    let numStr = num + '';
    let flag = false;
    for(let key of numStr){
        if(brokenButtons[+key] === true){
            flag = true;
            break;
        }
    }
    return flag;
}
function abs(num){
    if(num < 0){
        return num*-1;
    }
    return num;
}
