const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let inputArr = input[1].split(' ');
inputArr = inputArr.map(e => Number(e));

// 1. 뒤에서 부터 오름차순인지 확인한다

let pivotIdx;
let flag = false;
for(let i = inputArr.length -1; i >= 1 ; i--){
    if(inputArr[i] > inputArr[i-1]){
        pivotIdx = i-1;
        flag = true;
        break;
    }
}

// 모두 오름차순인 경우 -1을 리턴하도록 하자
if(flag === false){
    console.log(-1);
    return;
}

//2. 오름차순을 깨버린 인덱스와
//   해당 인덱스의 뒤에있는 값 중 오름차순을 
//   깨버린 값보다 크지만 가장 작은 값의 위치를 변경한다.
let min = Number.MAX_SAFE_INTEGER;
let minimumIdx;
for(let i = pivotIdx + 1; i < inputArr.length; i++){
    if(inputArr[i] < min && inputArr[pivotIdx] < inputArr[i]){
        min = inputArr[i];
        minimumIdx = i;
    }
}

let tempVal = inputArr[pivotIdx];
inputArr[pivotIdx] = inputArr[minimumIdx];
inputArr[minimumIdx] = tempVal;

//3. 오름차순을 꺠버린 인덱스 뒤의 값들을 오름차순으로 정렬한다.
let increArr = inputArr.slice(pivotIdx + 1);
increArr.sort((a,b)=>{
    if(a>b){
        return 1;
    }else{
        return -1;
    }
});

let ans = [];
ans = inputArr.slice(0, pivotIdx + 1);
ans = [...ans, ...increArr];
for(let i = 0 ; i < ans.length; i++){
    process.stdout.write(ans[i] + ' ');
}


// C++ 은 next_permuation을 이용하면 쉽게 해결할 수 있다.