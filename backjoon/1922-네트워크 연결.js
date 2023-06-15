const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = +input[0];
let M = +input[1];
let answer = 0;
let table = new Array(N+1);
for(let i = 1; i <= N; i++){
    table[i] = i;
}
let list = [];
for(let i = 0 ; i < M; i++){
    let [start, end, cost] = input[i + 2].split(' ');
    start = +start;
    end = +end;
    cost = +cost;
    list.push({start: start, end: end, cost: cost});
}

list.sort((a,b)=>{
    return a.cost - b.cost;
});

for(let i = 0; i < list.length; i++){
    let {start, end, cost} = list[i];
    if(getParent(start) !== getParent(end)){
        union(start, end);
        answer += cost;
    }
}

console.log(answer);

function getParent(x){
    if(table[x] === x) return x;
    return table[x] = getParent(table[x]);
}

function union(a ,b){
    let parentA = getParent(a);
    let parentB = getParent(b);

    if(parentA < parentB)
        table[parentB] = parentA;
    else
        table[parentA] = parentB;
    return;
}