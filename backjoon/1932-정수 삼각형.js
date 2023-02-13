const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
N = +N;

let triangle = new Array(N).fill(0).map(_=>new Array(N).fill(0));


for(let i = 0; i < N; i++){
    let row = input[i+1].split(' ');

    for(let j = 0 ; j < row.length; j++){
        triangle[i][j] = +row[j]; 
    }
}

// 첫 행은 계산하지 않는다.
for(let i = 1 ; i < N; i++){
    for(let j = 0 ; j <= i; j++){

        if(j === 0){
            triangle[i][j] += triangle[i-1][j];
        }else if(j === i){
            triangle[i][j] += triangle[i-1][j-1];
        }else{
            triangle[i][j] += Math.max(triangle[i-1][j], triangle[i-1][j-1]);
        }
    }
}

// 마지막 항의 가장 큰 값을 찾는다

let max = -1;
triangle[N-1].forEach(n =>{
    if(max < n){
        max = n;
    }
});

console.log(max);
