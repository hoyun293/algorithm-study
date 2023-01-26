const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let nums = input[1].split(' ');
let visited = new Array(nums.length).fill(false);
nums = nums.map(num => +num);

let maxi = -1;

recur([]);
console.log(maxi);
function recur(arr){

    if(arr.length === nums.length){
        let sum = 0;

        for(let i = 1 ; i < arr.length ; i++){
            sum += abs(arr[i] - arr[i-1]);
        }
        if(maxi < sum){
            maxi = sum;
        }
        return;
    }

    for(let i = 0 ; i < nums.length; i++){
        if(visited[i] === false){
            visited[i] = true;
            arr.push(nums[i]);
            recur(arr);
            arr.pop();
            visited[i] = false;
        }
    }
}

function abs(x){
    if(x<0){
        return x*-1;
    }
    return x;
}

