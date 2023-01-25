const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
N = +N;
M = +M;

let graph = new Array(N+1).fill(0).map(_ => []);
let visited = new Array(N+1).fill(false);

for(let i = 1; i <= M; i++){
    let [from, to] = input[i].split(' ');
    from = +from;
    to = +to;
    graph[from].push(to);
    graph[to].push(from);
}

// DFS 풀이
/*
function dfs(start){
    for(let i = 0 ; i < graph[start].length; i++){
        if(visited[graph[start][i]] === false){
            visited[graph[start][i]] = true;
            dfs(graph[start][i]);
        }
    }
}

let cnt = 0;
for(let i = 1; i <= M; i++){
    if(visited[i] === false){
        visited[i] = true;
        dfs(i);
        cnt++;
    }
}*/

// BFS 풀이

function bfs(start){
    let queue = [];
    queue.push(start);
    while(queue.length !== 0){
        let cur = queue.pop();
        for(let i = 0 ; i < graph[cur].length; i++){
            if(visited[graph[cur][i]] === false){
                visited[graph[cur][i]] = true;
                queue.push(graph[cur][i]);
            }
        }
    }
}
let cnt = 0;
for(let i = 1; i <= N; i++){
    if(visited[i] === false){
        visited[i] = true;
        bfs(i);
        cnt++;
    }
}
console.log(cnt);