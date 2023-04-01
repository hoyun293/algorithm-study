const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
N = +N;

let graph = new Array(N + 1);
let cycle = new Array(N + 1).fill(false);
let distances = new Array(N + 1).fill(-1);
let visited = new Array(N + 1).fill(false);
for(let i = 1; i <= N; i++) {
    graph[i] = [];
}

for(let i = 1; i <= N; i++) {
    let [from, to] = input[i].split(' ');
    from = +from;
    to = +to;
    graph[from].push(to);
    graph[to].push(from);
}

// 1. 순환하는 역을 찾는다.

function dfs(start, cur, cnt) {
    visited[cur] = true;
    if(start === cur && cnt >= 2) {
        cycle[start] = true;
        distances[start] = 0;
        return true;
    }

    for(let i = 0; i < graph[cur].length; i++) {
        if(visited[graph[cur][i]] === false) {
            if(dfs(start, graph[cur][i], cnt + 1)) return true;
        } else if(start === graph[cur][i] && cnt >= 2) {
            if(dfs(start, graph[cur][i], cnt)) return true;
        }
    }
}

for(let i = 1; i <= N; i++) {
    visited.fill(false);
    dfs(i, i, 0);
}

// 2. 순환하는 역에서 bfs로 최단 길이를 구해간다.



let queue = [];
for(let i = 1; i <= N; i++) {
    if(cycle[i] === true) {
        queue.push(i);
    }
}
bfs();
function bfs() {
    while(queue.length !== 0) {
        let v = queue.shift();
        for(let i = 0; i < graph[v].length; i++) {
            if(distances[graph[v][i]] === -1) {
                distances[graph[v][i]] = distances[v] + 1;
                queue.push(graph[v][i]);
            }
        }
    }
}
let ans = '';

for(let i = 1; i <= N; i++) {
    ans += distances[i] + ' ';
}
console.log(ans);