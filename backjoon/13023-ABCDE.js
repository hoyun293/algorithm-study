const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
N = +N;
M = +M;
let visited = new Array(N).fill(false);
let possible = false;
// 그래프 구성
let graph = new Array(N).fill(0).map(_ => []);

for(let i = 1 ; i <= M ; i++){
    let [from, to] = input[i].split(' ');
    from = +from;
    to = +to;
    graph[from].push(to);
    graph[to].push(from);
}

function dfs(idx, depth){
    if(depth === 4){
        possible = true;
        return;
    }

    let lists = graph[idx];
    for(let node of lists){
        if(possible === true) return;
        if(visited[node] === false){
            visited[node] = true;
            dfs(node, depth+1);
            visited[node] = false;
        }
    }
}

for(let i = 0 ; i < N; i++){
    if(possible === false){
        visited[i] = true;
        dfs(i, 0);
        visited[i] = false;
    }else{
        break;
    }
}

if(possible === true){
    console.log(1);
}else{
    console.log(0);
}

// let graph = new Array(N).fill([]) <= 이렇게 작성하면 각 배열에 같은 배열을 참조한다.