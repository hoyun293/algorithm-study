const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
let rslt = '';
N = +N;
M = +M;

recur([], 0);

function recur(arr, depth){
    if(depth === M){
        for(let i = 0 ; i < arr.length; i++){
            rslt += arr[i] + ' ';
        }
        rslt += '\n';
        return; 
    }

    for(let i = 1; i <= N; i++){
        arr.push(i);
        recur(arr, depth+1);
        arr.pop();
    }
}

rslt = rslt.slice(0, rslt.length-2);

console.log(rslt);