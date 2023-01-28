const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');
let [N, M] = input[0].split(' ');
N = +N;
M = +M;

let paper = new Array(N).fill(0).map(_=>new Array(M).fill(0));

for(let i = 0 ; i < N; i++){
    let temp = input[i+1].split(' ');
    temp = temp.map(n => +n);
    for(let j = 0 ; j < M; j++){
        paper[i][j] = temp[j];
    }
}

let max = -1;
let sum =0;
for(let i = 0 ; i < N; i++){
    for(let j = 0; j < M; j++){
        // 첫 번쨰 테트로미노 시계 방향 0도 회전
        sum = 0;
        for(let k = 0 ; k < 4; k++){
            if(0 <= i && i <= N-1 && 0 <= j+k && j+k <= M-1){
                sum += paper[i][j+k];
            }else{
                sum = 0
                break;
            }
        }
        max = Math.max(max, sum);
        // 첫 번쨰 테트로미노 시계 방향 90도 회전
        sum = 0;
        for(let k = 0 ; k < 4; k++){
            if(0 <= i+k && i+k <= N-1 && 0 <= j && j <= M-1){
                sum += paper[i+k][j];
            }else{
                sum = 0
                break;
            }
        }
        max = Math.max(max, sum);

        // 두 번째 테트로미노 시계 방향 0도 회전
        sum = 0;
        if(0 <= i && i <= N-1 && 0 <= j && j <= M-1 && 0 <= i+1 && i+1 <= N-1 && 0 <= j+1 && j+1 <= M-1){
            sum += paper[i][j] + paper[i][j+1] + paper[i+1][j] + paper[i+1][j+1];
        }
        max = Math.max(max, sum);

        // 다섯 번쨰 테트로미노 시계 방향 0도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j+1] !== undefined && paper[i][j+2] !== undefined && paper[i+1][j+1] !== undefined){
                sum = paper[i][j] + paper[i][j+1] + paper[i][j+2] + paper[i+1][j+1];
            }
        }
        max = Math.max(max, sum);

        // 다섯 번쨰 테트로미노 시계 방향 90도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined && paper[i+2] !== undefined){
            if(paper[i][j] !== undefined && paper[i+1][j] !== undefined && paper[i+2][j] !== undefined && paper[i+1][j-1] !== undefined){
                sum = paper[i][j] + paper[i+1][j] + paper[i+2][j] + paper[i+1][j-1];
            }
        }
        max = Math.max(max, sum);

        // 다섯 번쨰 테트로미노 시계 방향 180도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i-1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j-1] !== undefined && paper[i][j-2] !== undefined && paper[i-1][j-1] !== undefined){
                sum = paper[i][j] + paper[i][j-1] + paper[i][j-2] + paper[i-1][j-1];
            }
        }
        max = Math.max(max, sum);

        // 다섯 번쨰 테트로미노 시계 방향 270도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i-1] !== undefined && paper[i-2] !== undefined){
            if(paper[i][j] !== undefined && paper[i-1][j] !== undefined && paper[i-2][j] !== undefined && paper[i-1][j+1] !== undefined){
                sum = paper[i][j] + paper[i-1][j] + paper[i-2][j] + paper[i-1][j+1];
            }
        }
        max = Math.max(max, sum);

        // 네 번쨰 테트로미노 시계 방향 0도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined && paper[i+2 !== undefined]){
            if(paper[i][j] !== undefined && paper[i+1][j] !== undefined && paper[i+1][j+1] !== undefined && paper[i+2][j+1] !== undefined){
                sum = paper[i][j] + paper[i+1][j] + paper[i+1][j+1] + paper[i+2][j+1];
            }
        }
        max = Math.max(max, sum);

        // 네 번쨰 테트로미노 시계 방향 90도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j-1] !== undefined && paper[i+1][j-1] !== undefined && paper[i+1][j-2] !== undefined){
                sum = paper[i][j] + paper[i][j-1] + paper[i+1][j-1] + paper[i+1][j-2];
            }
        }
        max = Math.max(max, sum);

        // 네 번쨰 테트로미노 뒤집은 뒤 시계 방향 0도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined && paper[i+2] !== undefined){
            if(paper[i][j] !== undefined && paper[i+1][j] !== undefined && paper[i+1][j-1] !== undefined && paper[i+2][j-1] !== undefined){
                sum = paper[i][j] + paper[i+1][j] + paper[i+1][j-1] + paper[i+2][j-1];
            }
        }
        max = Math.max(max, sum);
        
        // 네 번쨰 테트로미노 뒤집은 뒤 시계 방향 90도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j+1] !== undefined && paper[i+1][j+1] !== undefined && paper[i+1][j+2] !== undefined){
                sum = paper[i][j] + paper[i][j+1] + paper[i+1][j+1] + paper[i+1][j+2];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 시계 방향 0도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined && paper[i+2] !== undefined){
            if(paper[i][j] !== undefined && paper[i+1][j] !== undefined && paper[i+2][j] !== undefined && paper[i+2][j+1] !== undefined){
                sum = paper[i][j] + paper[i+1][j] + paper[i+2][j] + paper[i+2][j+1];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 시계 방향 90도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j-1] !== undefined && paper[i][j-2] !== undefined && paper[i+1][j-2] !== undefined){
                sum = paper[i][j] + paper[i][j-1] + paper[i][j-2] + paper[i+1][j-2];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 시계 방향 180도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i-1] !== undefined && paper[i-2] !== undefined){
            if(paper[i][j] !== undefined && paper[i-1][j] !== undefined && paper[i-2][j] !== undefined && paper[i-2][j-1] !== undefined){
                sum = paper[i][j] + paper[i-1][j] + paper[i-2][j] + paper[i-2][j-1];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 시계 방향 270도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i-1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j+1] !== undefined && paper[i][j+2] !== undefined && paper[i-1][j+2] !== undefined){
                sum = paper[i][j] + paper[i][j+1] + paper[i][j+2] + paper[i-1][j+2];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 뒤집은 뒤 시계 방향 0도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined && paper[i+2] !== undefined){
            if(paper[i][j] !== undefined && paper[i+1][j] !== undefined && paper[i+2][j] !== undefined && paper[i+2][j-1] !== undefined){
                sum = paper[i][j] + paper[i+1][j] + paper[i+2][j] + paper[i+2][j-1];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 뒤집은 뒤 시계 방향 90도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i-1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j-1] !== undefined && paper[i][j-2] !== undefined && paper[i-1][j-2] !== undefined){
                sum = paper[i][j] + paper[i][j-1] + paper[i][j-2] + paper[i-1][j-2];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 뒤집은 뒤 시계 방향 180도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i-1] !== undefined && paper[i-2] !== undefined){
            if(paper[i][j] !== undefined && paper[i-1][j] !== undefined && paper[i-2][j] !== undefined && paper[i-2][j+1] !== undefined){
                sum = paper[i][j] + paper[i-1][j] + paper[i-2][j] + paper[i-2][j+1];
            }
        }
        max = Math.max(max, sum);

        // 세 번쨰 테트로미노 뒤집은 뒤 시계 방향 270도 회전
        sum = 0;
        if(paper[i] !== undefined && paper[i+1] !== undefined){
            if(paper[i][j] !== undefined && paper[i][j+1] !== undefined && paper[i][j+2] !== undefined && paper[i+1][j+2] !== undefined){
                sum = paper[i][j] + paper[i][j+1] + paper[i][j+2] + paper[i+1][j+2];
            }
        }
        max = Math.max(max, sum);
    }
}

console.log(max);