const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = +input[0];

let computers = new Array(N + 1);

for(let i = 1; i <= N; i++) {
    computers[i] = i;
}

let M = +input[1];

for(let i = 0; i < M; i++) {
    let [a, b] = input[2 + i].split(' ');
    a = +a;
    b = +b;
    union(a, b);
}

let answer = 0;
for(let i = 1; i <= N; i++) {
    if(getParent(computers[i]) === 1) answer++;
}

console.log(answer - 1);

function getParent(a) {
    if(computers[a] === a) return a;
    return computers[a] = getParent(computers[a]);
}
function union(a, b) {
    let parentA = getParent(a);
    let parentB = getParent(b);

    if(parentA < parentB) {
        computers[parentB] = parentA;
    } else if(parentA > parentB) {
        computers[parentA] = parentB;
    }
}