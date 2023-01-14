const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
N = +N;
M = +M;
let visited = new Array(N).fill(false);
let rslt = '';

let numbers = input[1].split(' ');
numbers = numbers.map(e => +e);

numbers.sort((a,b)=>{
    if(a > b){
        return 1;
    }else{
        return -1;
    }
});

function recur(arr, depth){
    if(depth === M){
        arr.forEach(e => {
            rslt += e + ' ';
        })
        rslt += '\n';
        return;
    }

    for(let i = 0 ; i < N; i++){
        if(visited[i] === false){
            visited[i] = true;
            arr.push(numbers[i]);
            recur(arr, depth + 1);
            arr.pop();
            visited[i] = false;
        }
    }
}

recur([], 0);
console.log(rslt);