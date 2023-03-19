const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let ans = '';
let visited;

for(let i = 0; i < input.length; i++) {
    let tc = input[i].split(' ');
    tc = tc.map(e => +e);
    let k = tc[0];

    if(k === 0) break;
    visited = new Array(k).fill(false);
    recur(6, tc.slice(1), [], 0);
    ans += '\n';
}
console.log(ans);


function recur(k, inArr, outArr, next) {

    if(outArr.length === k) {
        for(let i = 0; i < outArr.length; i++) {
            ans += outArr[i] + ' ';
        }
        ans += '\n';
        return;
    }
    for(let i = next; i < inArr.length; i++) {
        if(visited[i] === false) {
            outArr.push(inArr[i]);
            visited[i] = true;
            recur(k, inArr, outArr, i + 1);
            visited[i] = false;
            outArr.pop();
        }
    }
}