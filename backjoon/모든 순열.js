const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = Number(input[0]);

let numArr = [];
let visited = [];
let answer ='';
for(let i = 1 ; i <= N; i++){
    numArr.push(i);
    visited.push(false);
}

function recur(ansArr, depth){

    if(depth === N){
        for(let i = 0 ; i < ansArr.length; i++){
            answer += ansArr[i] + ' ';
        }
        answer += '\n';
        return;
    }

    for(let i = 0 ; i < numArr.length; i++){
        if(visited[i] === false){
            ansArr.push(numArr[i]);
            visited[i] = true;
            recur(ansArr, depth+1);
            visited[i] = false;
            ansArr.pop();
        }
    }
}

recur([], 0);

// 개행문자 제거
answer = answer.substring(0, answer.length-1);
console.log(answer);