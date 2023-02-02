const {resolveObjectURL} = require('buffer');
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
N = +N;
let days = new Array(N+1).fill(0);
let payments = new Array(N+1).fill(0);
let maxi = -1;
for(let i = 1 ; i <= N; i++){
    let [day, payment] = input[i].split(' ');
    day = +day;
    payment = +payment;
    days[i] = day;
    payments[i] = payment;
}

function recur(sum, day){
    // 다음 일자 상담하는 경우
    if((day + days[day]) <= N+1){
        recur(sum + payments[day], day + days[day]);
    }
    else{
        maxi = Math.max(maxi, sum);
    }

    // 다음 일자 상담하지 않는 경우
    if(day + 1 <= N + 1){
        recur(sum, day + 1);
    }else{
        maxi = Math.max(maxi, sum);
    }
}

recur(0 , 1);
console.log(maxi);