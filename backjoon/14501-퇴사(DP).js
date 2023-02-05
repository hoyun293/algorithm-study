const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
N = +N;

let dp = new Array(N+1).fill(0);
let times = new Array(N+1).fill(0);
let moneys = new Array(N+1).fill(0);
for(let i = 1; i <= N; i++){
    let [time, money] = input[i].split(' ');
    time = +time;
    money = +money;
    times[i] = time;
    moneys[i] = money;
}


for(let i = 1; i <= N ;i++){
    if(i + times[i] > N+1) continue;
    let possible = [];

    for(let j = 1; j < i; j++){
        if(j + times[j] <= i){
            possible.push(dp[j] + moneys[i]);
        }
    }
    possible.push(moneys[i]);

    possible.sort((a,b)=>{
        return b-a;
    })
    dp[i] = possible[0]; // 가장 큰 값을 취득
}
dp.sort((a,b)=>{
    return b-a;
})
console.log(dp[0]);


// 거꾸로 i = N부터 내려오면 O(N)으로 해결할 수 있다.