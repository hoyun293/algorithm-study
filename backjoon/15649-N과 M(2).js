const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let [N, M] = input[0].split(' ');
N = Number(N);
M = Number(M);
let visited = new Array(N + 1).fill(0);
let result = '';
function recur(arr, depth, startIdx) {
    if(depth === M) {
        for(let i = 0; i < arr.length; i++) {
            result += arr[i] + ' ';
        }
        result += '\n';
        return;
    }

    for(let i = startIdx; i <= N; i++) {
        if(visited[i] === 1) {
            continue;
        } else {
            arr.push(i);
            visited[i] = 1;
            recur(arr, depth + 1, i + 1);
            arr.pop();
            visited[i] = 0;
        }
    }
}


recur([], 0, 1);
console.log(result);

// C++ next_permutation을 이용하여 풀었지만 백트래킹으로도 해결