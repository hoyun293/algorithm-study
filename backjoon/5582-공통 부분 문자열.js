let fs = require('fs');
let input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let str1 = input[0];
let str2 = input[1];

let dp = new Array(str1.length + 1).fill(0).map(_ => new Array(str2.length + 1).fill(0));

let str1Arr = str1.split('');
str1Arr.unshift(0); // 인덱스 맞춤
let str2Arr = str2.split('');
str2Arr.unshift(0); // 인덱스 맞춤

let maxi = Number.MIN_SAFE_INTEGER;
for(let i = 1; i < str1Arr.length; i++) {
    for(let j = 1; j < str2Arr.length; j++) {
        if(str1Arr[i] === str2Arr[j]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        }
        maxi = Math.max(dp[i][j], maxi);
    }
}
console.log(maxi);

