const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let inputArr = input[1].split(' ');

inputArr = inputArr.map(e => Number(e));

// 다음 순열과 비슷하지만 반대의 규칙을 갖는다.
// 1 2 3 4인 경우를 먼저 처리한다.
if(inputArr.every((e,i)=> e === i+1)){
    console.log(-1);
    return;
}else{
    // 1. 뒤에서 부터 내림차순을 깨는 인덱스를 찾는다.
    let i = inputArr.length - 2;
    while(true){
        if(inputArr[i] > inputArr[i+1]){
            break;
        }        
        i--;
    }

    //2. 1에서 구한 인덱스 뒤에 위치해있는 값 중 인덱스에 해당하는 값 보다 작지만 가장 큰 값을 구한다.
    let maxi = -1;
    let j;
    for(let k = i+1; k < inputArr.length; k++){
        if(inputArr[i] > inputArr[k] && maxi < inputArr[k]){
            maxi = inputArr[k];
            j = k;
        }
    }
    
    //3. 1과 2에서 각각 구한 인덱스에 해당 하는 값을 교환한다.
    let temp = inputArr[i];
    inputArr[i] = inputArr[j];
    inputArr[j] = temp;

    //4. 1에서 구한 인덱스의 뒷 숫자들을 내림합니다.
    let firstHalf = inputArr.slice(0, i+1);
    let secondHalf = inputArr.slice(i+1).sort((a,b)=>{
        if(a<b){
            return 1;
        }else{
            return -1;
        }
    })

    let ans = [...firstHalf, ...secondHalf];
    for(let i = 0 ; i < ans.length; i++){
        process.stdout.write(ans[i] + ' ');
    }
}
