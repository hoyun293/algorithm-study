const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, K] = input[0].split(' ');
N = +N;
K = +K;
const max = 200001;

let visited = new Array(max).fill(false);
let path = new Array(max).fill(-1);
function bfs(start){
    let queue = [];
    queue.push(start);
    while(queue.length !== 0){
        let current = queue.shift();
        if(current === K){
            let ans = [];
            let prev = current;
            while(path[prev] != prev){
                ans.push(prev);
                prev = path[prev];
            }
            ans.push(prev);
            ans.reverse();
            let answer = ''
            ans.forEach(e => answer += e + ' ');
            console.log(ans.length-1);
            console.log(answer);
            return;
        }
        if(visited[current-1] === false && current-1 >= 0){
            visited[current-1] = true;
            path[current-1] = current;
            queue.push(current-1);
        }        
        if(visited[current+1] === false && current+1 < max){
            visited[current+1] = true;
            path[current+1] = current;
            queue.push(current+1);
        }
        if(visited[current*2] === false && current*2 < max){
            visited[current*2] = true;
            path[current*2] = current;
            queue.push(current*2);
        }
    }
}
visited[N] = true;
path[N] = N;
bfs(N);
