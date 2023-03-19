const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
N = +N;
M = +M;
let visited = new Array(N + 1).fill(false);
let ans = '';
function recur(next, arr) {
    if(arr.length === M) {
        arr.forEach(e => {
            ans += e + ' ';
        });
        ans += '\n';
        return;
    }

    for(let i = next; i <= N; i++) {
        if(visited[i] === false) {
            visited[i] = true;
            arr.push(i);
            recur(i + 1, arr);
            arr.pop();
            visited[i] = false;
        }
    }
}

recur(1, []);
console.log(ans);