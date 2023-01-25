const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let K = input[0];
K = +K;

let lineNum = 1;
let visited;
let graph;

for(let i = 1 ; i <= K; i++){

    let [V, E] = input[lineNum++].split(' ');
    V = +V;
    E = +E;

    visited = new Array(V+1).fill(0);
    graph = new Array(V+1).fill(0).map(_ => []);
    for(let j = 1; j <= E; j++){
        let [from, to] = input[lineNum++].split(' ');
        from = +from;
        to = +to;
        graph[from].push(to);
        graph[to].push(from);
    }

    // R,B로 칠한다.
    let ans = '';
    for(let j = 1; j <= V; j++){
        if(visited[j] === 0){
            visited[j] = 'R';
            ans = bfs(j);
            if(ans === 'NO'){
                console.log('NO');
                break;
            }
        }
    }
    if(ans === 'YES') console.log('YES');
}



function bfs(start){
    let queue = [];
    queue.push(start);

    while(queue.length !== 0){
        let curNode = queue.shift();
        let curNodeAdj = graph[curNode];
        for(let i = 0 ; i < curNodeAdj.length; i++){
            if(visited[curNodeAdj[i]] === 0){
                visited[curNodeAdj[i]] = visited[curNode] === 'R' ? 'B' : 'R';
                queue.push(curNodeAdj[i]);
            }else if(visited[curNodeAdj[i]] === visited[curNode]){
                return 'NO';
            }
        }
    }
    return 'YES';
}