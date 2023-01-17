const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M, V] = input[0].split(' ');
N = +N;
M = +M;
V = +V;

let visited = new Array(N+1).fill(false);
let graph = new Array(N+1).fill(0).map(_ => []);

for(let i = 1 ; i <= M ; i++){
    let [from, to] = input[i].split(' ');
    from = +from;
    to = +to;
    
    graph[from].push(to);
    graph[to].push(from);
}

// 정점 번호가 작은 것을 먼저 방문한다.
for(let i = 1 ; i < graph.length; i++){
    graph[i].sort((a,b)=>{
        if(a<b){
            return -1;
        }else{
            return 1;
        }
    })
}

// DFS 먼저 수행
let dfsRslt = '';

function dfs(start){
    visited[start] = true;
    dfsRslt += start + ' ';
    for(let i = 0 ; i < graph[start].length; i++){
        if(visited[graph[start][i]] === false){
            dfs(graph[start][i]);
        }
    }
}
dfs(V);
console.log(dfsRslt);

// BFS 수행
let bfsRslt = '';

// visited 배열 초기화
visited.fill(false);

function bfs(start){
    let queue = [];
    queue.push(start);
    while(queue.length !== 0){
        let cur = queue.shift();
        bfsRslt += cur + ' ';
        for(let i = 0 ; i < graph[cur].length ; i++){
            if(visited[graph[cur][i]] === false){
                visited[graph[cur][i]] = true;
                queue.push(graph[cur][i]);
            }
        }

    }
}

visited[V] = true;
bfs(V);
console.log(bfsRslt);