const fs = require('fs');
const input = fs.readFileSync(__dirname + '/stdin.txt').toString().split('\n');

let [L, C] = input[0].split(' ');
let alpha = input[1].split(' ');
alpha.sort();
let vowels = ['a', 'e', 'i', 'o', 'u'];
L = +L;
C = +C;
let visited = new Array(C+1).fill(false);

function recur(arr, vowel, conso, start){

    if(arr.length === L){
        if(vowel >=1 && conso >= 2){
          console.log(arr.join(''));
        }
        return;
    }
    for(let i = start ; i < alpha.length; i++){
        if(visited[i] === false){
            vowels.includes(alpha[i]) ? vowel++ : conso++;
            visited[i] = true;
            arr.push(alpha[i]);
            recur(arr, vowel, conso, i);
            arr.pop();
            visited[i] = false;
            vowels.includes(alpha[i]) ? vowel-- : conso--;
        }
    }
}

recur([], 0, 0, 0);