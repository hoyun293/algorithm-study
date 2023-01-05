const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let N = input.length;

for(let i = 0; i < N; i++) {

    let num = Number(input[i]);

    let count = 1;
    let number = 1;
    while(true) {
        if(number % num === 0) {
            console.log(count);
            break;
        }

        number = number * 10 + 1;
        number = number % num;
        count++;
    }
}



//BigInt가 필요한가?