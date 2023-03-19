const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
N = +N;
M = +M;
let visited = new Array(N + 1).fill(false);
let ans = '';

recur(N, M, []);
console.log(ans);
function recur(n, m, arr) {
    if(arr.length === m) {
        arr.forEach(e => {
            ans += e + ' ';
        });
        ans += '\n';
        return;
    }
    for(let i = 1; i <= n; i++) {
        if(visited[i] === false) {
            visited[i] = true;
            arr.push(i);
            recur(n, m, arr);
            arr.pop();
            visited[i] = false;
        }
    }
}
