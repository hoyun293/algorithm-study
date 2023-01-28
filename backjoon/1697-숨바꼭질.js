 const fs = require('fs');
 const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

 let [N, K] = input[0].split(' ');
 let visited = new Array(100001).fill(-1);
 N = +N;
 K = +K;

function bfs(start){
    let queue = [];
    queue.push(start);

    while(queue.length !== 0){
        let cur = queue.shift();
        if(cur.pos === K){
            return;
        }
        if(0 <= cur.pos && cur.pos <= 100000){
            if(visited[cur.pos-1] === -1){
                visited[cur.pos-1] = cur.time+1;
                queue.push({pos: cur.pos-1, time: cur.time+1});
            } 
            if(visited[cur.pos+1] === -1){
                visited[cur.pos+1] = cur.time+1;
                queue.push({pos: cur.pos+1, time: cur.time+1});
            }
            if(visited[cur.pos*2] === -1){
                visited[cur.pos*2] = cur.time+1;
                queue.push({pos: cur.pos*2, time: cur.time+1});
            }
        }
    }
}

visited[N] = 0;
bfs({pos: N, time: 0});

console.log(visited[K]);