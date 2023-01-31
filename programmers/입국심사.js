function solution(n, times) {
    let answer = 0;

    // 가장 오래걸리는 시간을 먼저 구한다
    times.sort((a,b)=>{
        return a-b;
    })

    let biggest = times.at(-1);
    let maxCycle = Math.ceil(n / times.length);
    let end = biggest * maxCycle;
    let start = 0;
    
    let ansTime = n * biggest + 100;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        let totalN = 0;
        for(let time of times){
            totalN += Math.floor(mid/time);
        }
        if(totalN >= n){
            ansTime = Math.min(ansTime, mid);
            end = mid - 1;
        }else if(totalN < n){
            start = mid + 1;
        }
    }
    answer = ansTime;

    return answer;
}

// edge case n:1, times: [2,2]와 같이 소요시간에 처리하는 수가 n보다 많은 경우를 고려해야한다.