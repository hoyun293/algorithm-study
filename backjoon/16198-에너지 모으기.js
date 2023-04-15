const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let max = Number.MIN_SAFE_INTEGER;
let inputArr = input[1].split(' ');
inputArr = inputArr.map(e => +e);


dfs(inputArr, 0);
function dfs(arr, sum) {
    if(arr.length === 2) {
        max = Math.max(max, sum);
        return;
    }
    // 처음과 마지막은 선택할 수 없음.
    for(let i = 1; i < arr.length - 1; i++) {
        let tempSum = arr[i - 1] * arr[i + 1];
        let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
        let temp = arr[i];
        dfs(newArr, sum + tempSum);
    }
}

console.log(max);

// splice로 하면 초과되는데
// slice로 하면 된다

