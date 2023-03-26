const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
N = +N;
M = +M;

let maze = new Array(N).fill(0).map(_ => new Array(M).fill(0));
let dp = new Array(N).fill(0).map(_ => new Array(M).fill(0));
for(let i = 0; i < N; i++) {
    let inputArr = input[i + 1].split(' ');
    for(let j = 0; j < M; j++) {
        maze[i][j] = +inputArr[j];
        dp[i][j] = +inputArr[j];
    }
}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(i === N - 1 && j !== M - 1) {
            if(maze[i][j + 1] + dp[i][j] > dp[i][j + 1]) {
                dp[i][j + 1] = maze[i][j + 1] + dp[i][j];
            }
        } else if(j === M - 1 && i !== N - 1) {
            if(maze[i + 1][j] + dp[i][j] > dp[i + 1][j]) {
                dp[i + 1][j] = maze[i + 1][j] + dp[i][j];
            }
        } else if(i === N - 1 && j === M - 1) {
            console.log(dp[i][j]);
        } else {
            if(maze[i][j + 1] + dp[i][j] > dp[i][j + 1]) {
                dp[i][j + 1] = maze[i][j + 1] + dp[i][j];
            }
            if(maze[i + 1][j] + dp[i][j] > dp[i + 1][j]) {
                dp[i + 1][j] = maze[i + 1][j] + dp[i][j];
            }
            if(maze[i + 1][j + 1] + dp[i][j] > dp[i + 1][j + 1]) {
                dp[i + 1][j + 1] = maze[i + 1][j + 1] + dp[i][j];
            }
        }
    }
}