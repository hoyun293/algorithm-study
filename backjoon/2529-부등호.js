const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let compares = input[1].split(' ');

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let visited = new Array(10).fill(false);
let mini = Number.MAX_SAFE_INTEGER;
let maxi = Number.MIN_SAFE_INTEGER;
let strMini = '';
let strMaxi = '';

function recur(arr){
    if(arr.length === compares.length + 1){
        let flag = true;
        for(let i = 0 ; i < arr.length - 1; i++){
            if(compares[i] === '>'){
                if(!(arr[i] > arr[i+1])){
                    flag = false;

                }
            }else if(compares[i] === '<'){
                if(!(arr[i] < arr[i+1])){
                    flag = false;
                }
            }
        }
        if(flag === true){
            let nums = Number(arr.join(''));
            if(maxi < nums){
                maxi = nums;
                strMaxi = arr.join('');
            }
            if(mini > nums){
                mini = nums;
                strMini = arr.join('');
            }
        }
    }


    for(let i = 0; i < numbers.length; i++){
        if(visited[numbers[i]] === false){
            visited[numbers[i]] = true;
            arr.push(numbers[i])
            recur(arr);
            arr.pop();
            visited[numbers[i]] = false;
        }
    }
}

recur([]);

console.log(strMaxi);
console.log(strMini);