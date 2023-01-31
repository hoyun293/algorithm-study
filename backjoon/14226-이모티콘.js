const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N  = input[0];
N = +N;

let visited = new Array(2001).fill(false).map(_=>new Array(2001).fill(false));

visited[1][0] = true;
bfs({screenEmoji: 1, clipEmoji: 0, time: 0});
function bfs(start){

    let queue = [];
    queue.push(start);

    while(queue.length !== 0){
        let cur = queue.shift();
        let screenEmoji = cur.screenEmoji;
        let clipEmoji = cur.clipEmoji;
        let curTime = cur.time;
        //일치하는 경우
        if(screenEmoji === N){
            console.log(curTime);
            return;
        }
        // 1. 화면에 있는 이모티콘 복사
        let newClipEmoji1 = screenEmoji;
        let newScreenEmoji1 = screenEmoji; 
        if(0 <= newClipEmoji1 && newClipEmoji1 <= 2000 && 0 <= newScreenEmoji1 && newScreenEmoji1 <= 2000){
            if(visited[newScreenEmoji1][newClipEmoji1] === false){
                visited[newScreenEmoji1][newClipEmoji1] = true;
                queue.push({screenEmoji: newScreenEmoji1, clipEmoji: newClipEmoji1, time: curTime + 1});
            }
        }
        // 2. 클립보드에 있는 이모티콘 붙여넣기
        let newClipEmoji2 = clipEmoji;
        let newScreenEmoji2 = screenEmoji + clipEmoji;
        if(0 <= newClipEmoji2 && newClipEmoji2 <= 2000 && 0 <= newScreenEmoji2 && newScreenEmoji2 <= 2000){
            if(visited[newScreenEmoji2][newClipEmoji2] === false && clipEmoji > 0){
                visited[newScreenEmoji2][newClipEmoji2] = true;
                queue.push({screenEmoji: newScreenEmoji2, clipEmoji: newClipEmoji2, time: curTime + 1});
            }
        }
        // 3. 화면에 있는 이모티콘 하나 삭제
        let newClipEmoji3 = clipEmoji;
        let newScreenEmoji3 = screenEmoji-1;
        if(0 <= newClipEmoji3 && newClipEmoji3 <= 2000 && 0 <= newScreenEmoji3 && newScreenEmoji3 <= 2000){
            if(visited[newScreenEmoji3][newClipEmoji3] === false){
                visited[newScreenEmoji3][newClipEmoji3] = true;
                queue.push({screenEmoji: newScreenEmoji3, clipEmoji: newClipEmoji3, time: curTime + 1});
            }
        }
        
    }
}