const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [N, M] = input[0].split(' ');
let rslt = '';

N = +N;
M = +M;

recur([], 0, 0);
function recur(arr, depth, prevVal){
    
    if(arr.length === M){

        for(let i = 0 ; i < arr.length; i++){
            rslt += arr[i] + ' ';
        }
        rslt += '\n';
        return;
    }

    for(let i = 1 ; i <= N; i++){
        if(i >= prevVal){
            arr.push(i);
            recur(arr, depth + 1, i);
            arr.pop();
        }
    }
}

rslt = rslt.slice(0, rslt.length-2);
console.log(rslt);