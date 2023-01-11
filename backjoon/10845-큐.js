const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = +input[0];
let queue = [];
let rslt = '';

for(let i = 1 ; i <= N; i++){
    let [order, num] = input[i].split(' ');
    num = +num;
    order = order.trim(); 
    if(order === 'push'){
        queue.push(num);
    }else if(order === 'pop'){
        rslt += (queue.length === 0 ? -1 : queue.shift()) + '\n';
    }else if(order === 'size'){
        rslt += queue.length + '\n';
    }else if(order === 'empty'){
        rslt += (queue.length === 0 ? 1 : 0) + '\n'; 
    }else if(order === 'front'){
        rslt += (queue.length === 0 ? -1 : queue[0]) + '\n';
    }else if(order === 'back'){
        rslt += (queue.length === 0 ? -1 : queue[queue.length-1]) + '\n';
    }
}

console.log(rslt.slice(0, rslt.length-1));


// nodejs 환경에서는 order에 trim을 해줘야된다. 
// 브라우저 환경에서는 trim을 안해도 되었음.
// 아마 nodejs는 split할 때 없는 값이 front, back, size, pop 등 split이 안되고 혼자 있을때 split을 하면
// 뒤에 어떤 문자가 붙는 듯 싶다.