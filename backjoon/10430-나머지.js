const fs = require("fs");
const input = fs.readFileSync(__dirname + "/stdin.txt").toString().split('\n');

let numArr = input[0].trim().split(' ');

numArr = numArr.map(e => Number(e));

let [A, B, C] = numArr;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
