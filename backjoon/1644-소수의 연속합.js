/*
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = +input[0];
let answer = 0;
// 1. N 보다 작은 소수들을 구한다.
let primeNums = [];
for(let i = 2; i <= N ; i++){
    if(isPrimeNumber(i)) primeNums.push(i);    
}

// 2. 투 포인터를 이용해서 각 연속된 구간의 합이 구하는 값과 동일한지 확인한다.
let start = 0; end = 1;

while(true){
    let sum = 0;
    for(let i = start; i < end; i++){
        sum += primeNums[i];
    }

    if(sum === N){
        answer++;
        start++;
    }else if(sum < N){
        end++;
    }else if(sum > N){
        start++;
    }

    if(end > primeNums.length){
        // 더이상 가능성이 없다.
        break;
    }
}

console.log(answer);

function isPrimeNumber(num){
    let r = Math.sqrt(num);
    let flag = false;
    for(let i = 2; i <=r ; i++){
        if(num % i === 0){
            flag = true;
            break;
        }
    }
    if(flag){
        return false;
    }else{
        return true;
    }
}
*/
// 위와 같이 풀면 TLE 될 법한데 백준에서는 통과했음
// 하지만 아무리 봐도 40억이라는 worst case 가 고민되므로 
// 에라토스테네스의 체를 이용해서 풀자 특정 범위에서 소수를 모두 구할때 가장 빠른 방법!

const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = +input[0];
let answer = 0;
// 1. N 보다 작은 소수들을 구한다.
let primeNums = [];
getAllPrimeNumbers(N);
// 2. 투 포인터를 이용해서 각 연속된 구간의 합이 구하는 값과 동일한지 확인한다.
let start = 0; end = 1;

while(true){
    let sum = 0;
    for(let i = start; i < end; i++){
        sum += primeNums[i];
    }

    if(sum === N){
        answer++;
        start++;
    }else if(sum < N){
        end++;
    }else if(sum > N){
        start++;
    }

    if(end > primeNums.length){
        // 더이상 가능성이 없다.
        break;
    }
}

console.log(answer);

function getAllPrimeNumbers(num){
    let primeNumArr = new Array(num + 1).fill(true);

    for(let i = 2; i  <= num ; i++){
        if(primeNumArr[i] === false){
            continue;
        }

        for(let j = i*2; j <= num; j+= i){
            if(primeNumArr[j]) primeNumArr[j] = false;
        }
    }

    for(let i = 2; i < primeNumArr.length; i++){
        if(primeNumArr[i]) primeNums.push(i);
    }
}
