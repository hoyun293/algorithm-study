const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');
let [E, S, M] = input[0].split(' ');
E = Number(E);
S = Number(S);
M = Number(M);

let year = 0;

let [e, s, m] = [0, 0, 0];
while(true){
    e++;
    s++;
    m++;
    year++;
    
    if(e === 16){
        e = 1;
    }
    if(s === 29){
        s = 1;
    }
    if(m === 20){
        m = 1;
    }

    if(e === E && s === S && m === M){
        break;
    }
}

console.log(year);


// 가장 빠른 연도를 출력한다 
// E S M 으로 표현가능한 가장 빠른 연도는 
// [E S M] = [15 28 19]인 경우 1씩 증가하면 다시 1 1 1이되기 때문
// 예제 출력4에서 최대 표현이 가능한 빠른 연도가 15 28 19 -> 7980으로 나타난다. 브루트포스를 돌리게 충분힐 작은 수...

//  !! 백준은 4MB 제한이 있어 javascript로 풀기가 제한이 있는 듯하다.
