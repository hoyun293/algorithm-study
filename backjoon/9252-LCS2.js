const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let str1 = input[0].split('');
let str2 = input[1].split('');

let dp = new Array(str1.length + 1).fill(0).map(_ => new Array(str2.length + 1).fill(0));
let path = new Array(str1.length + 1).fill(0).map(_ => new Array(str2.length + 1).fill(-1));
for(let i = 1; i < str1.length + 1; i++) {
    for(let j = 1; j < str2.length + 1; j++) {
        if(str1[i - 1] === str2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
            path[i][j] = 0;
        } else {
            if(dp[i][j - 1] > dp[i - 1][j]) {
                dp[i][j] = dp[i][j - 1];
                path[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j];
                path[i][j] = 2;
            }
        }
    }
}
let i = str1.length;
let j = str2.length;
let pathArr = [];
while(true) {
    if(i === 0 || j === 0) break;

    if(path[i][j] === 0) {
        pathArr.push(str1[i - 1]);
        i--;
        j--;
    } else if(path[i][j] === 1) {
        j--;
    } else if(path[i][j] === 2) {
        i--;
    }
}

console.log(dp[str1.length][str2.length]);
let ans = pathArr.reverse();
console.log(ans.join(''));