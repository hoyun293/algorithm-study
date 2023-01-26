const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
N =+N;
// U L D R
let UD = [-1, 0, 1, 0]; 
let LR = [0, -1, 0, 1];
let visited = new Array(N).fill(0).map(_=>new Array(N).fill(false));
let map = new Array(N).fill(0).map(_=>Array(N).fill(0));
let group = 1;

for(let i = 1 ; i <= N; i++){
    for(let j = 0 ; j < N; j++){
        map[i-1][j] = +input[i][j];
    }
}

for(let i = 0 ; i < N; i++){
    for(let j = 0; j < N; j++){
        if(visited[i][j] === false && map[i][j] === 1){
            group++;
            visited[i][j] = true;
            map[i][j] = group;
            dfs(i,j);
        }
    }
}

let answers = [];
let homeMap= new Map();
for(let i = 0 ; i < N; i++){
    for(let j = 0 ; j < N; j++){
        if(map[i][j] !== 0 && map[i][j] !== 1){
            homeMap.set(map[i][j], (homeMap.get(map[i][j]) || 0) + 1);
        }
    }
}

for(let value of homeMap.values()){
    answers.push(value);
}
answers.sort((a,b)=>{
    if(a<b){
        return -1;
    }else{
        return 1;
    }
});
answers.unshift(homeMap.size);
answers.forEach(v=>{
    console.log(v);
})
function dfs(y, x){
    
    for(let i = 0 ; i < 4; i++){
        let newY = y + UD[i];
        let newX = x + LR[i];
        if(0 <= newY && newY < N && 0 <= newX && newX < N){

            if(visited[newY][newX] === false && map[newY][newX] === 1){
                visited[newY][newX] = true;
                map[newY][newX] = group;
                dfs(newY, newX);
            }
        }
    }
}


// 자바스크립트의 sort의 경우 배열에 숫자형이 있어도 기본 sort()함수를 사용하면 문자열로 취급하고 정렬한다!