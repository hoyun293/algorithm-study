function solution(n, k) {
    let answer = [];
    let numbers = [];

    for(let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    k = k - 1; // 인덱스와 순서 매칭

    for(let i = 0; i < n; i++) {
        let nth = k % factorial(numbers.length - 1);
        let chunkNth = Math.floor(k / factorial(numbers.length - 1));
        k = nth;
        answer.push(numbers[chunkNth]);
        numbers.splice(chunkNth, 1);
    }
    return answer;
}

function factorial(n) {
    let res = 1;
    for(let i = 1; i <= n; i++) {
        res = res * i;
    }
    return res;
}


// 백트래킹으로 푸는 방식
// 당연히 시간초과
/*
let printOrder = 0;
let visited = [];
let numbers = [];
let isFind = false;
let ans;
function solution(n, k) {
    var answer = [];

    for(let i = 1; i <= n; i++) {
        numbers.push(i);
        visited.push(false);
    }

    recur([], 0, k);
    answer = ans;
    return answer;
}

function recur(arr, depth, targetOrder) {
    if(isFind === true) return;

    if(depth === numbers.length) {
        printOrder++;
        if(printOrder === targetOrder) {
            ans = [...arr];
            isFind = true;
        }
        return;
    }

    for(let i = 0; i < numbers.length; i++) {
        if(isFind === true) return;
        if(visited[i] === true) continue;

        arr.push(numbers[i]);
        visited[i] = true;
        recur(arr, depth + 1, targetOrder);
        visited[i] = false;
        arr.pop();
    }
}
*/