const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let N = input[0];
let ans = 0;

N = +N;
if(N < 10) {
    ans = N;
} else if(N < 100) {
    ans = 9;
    N = N - 9;
    ans += N * 2;
} else if(N < 1000) {
    ans = 9 + 90 * 2;
    N = N - 99;
    ans += N * 3;
} else if(N < 10000) {
    ans = 9 + 90 * 2 + 900 * 3;
    N = N - 999;
    ans += N * 4;
} else if(N < 100000) {
    ans = 9 + 90 * 2 + 900 * 3 + 9000 * 4;
    N = N - 9999;
    ans += N * 5;
} else if(N < 1000000) {
    ans = 9 + 90 * 2 + 900 * 3 + 9000 * 4 + 90000 * 5;
    N = N - 99999;
    ans += N * 6;
} else if(N < 10000000) {
    ans = 9 + 90 * 2 + 900 * 3 + 9000 * 4 + 90000 * 5 + 900000 * 6;
    N = N - 999999;
    ans += N * 7;
} else if(N < 100000000) {
    ans = 9 + 90 * 2 + 900 * 3 + 9000 * 4 + 90000 * 5 + 900000 * 6 + 9000000 * 7;
    N = N - 9999999;
    ans += N * 8;
} else if(N === 100000000) {
    ans = 9 + 90 * 2 + 900 * 3 + 9000 * 4 + 90000 * 5 + 900000 * 6 + 9000000 * 7;
    N = N - 9999999;
    ans += N * 8;
    ans += 9;
}

console.log(ans);