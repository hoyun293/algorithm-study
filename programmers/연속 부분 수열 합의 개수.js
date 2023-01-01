function solution(elements) {
    let answer = 0;
    let dp = new Array(1001).fill(0).map(_=>new Array(1001).fill(0));
    let elementSet = new Set();

    // 길이가 1인 경우 각각 처리
    for(let i = 0 ; i < elements.length; i++){
        elementSet.add(elements[i]);
    }

    // 길이가 2인 연속 부분수열을 먼저 구한다.
    for(let i = 0; i < elements.length - 1; i++){
        dp[i][2] = elements[i] + elements[i+1];
        elementSet.add(dp[i][2]);
    }
    // 마지막 경우 첫 번째 원소를 읽는다.
    dp[elements.length-1][2] = elements[elements.length-1] + elements[0];
    elementSet.add(dp[elements.length-1][2]);
    
    // 길이가 2인 연속 부분수열 값을 이용해 그 이후의 연속 부분수열 값을 구한다.
    for(let i = 0 ; i < elements.length; i++){
        for(let j = 3; j < elements.length; j++){
            dp[i][j] = dp[i][j-1] + elements[(i+j-1)%elements.length];
            elementSet.add(dp[i][j]);
        }
    }
    // 길이가 n인 경우 모든 수를 합한다.
    sum = 0;
    for(let i = 0 ; i < elements.length; i++){
        sum += elements[i];
    }
    elementSet.add(sum);
    answer = elementSet.size;
    return answer;
}

// n이 1000일때  시간 복잡도는  O(3*3*3) <=  <= O(1000*1000*1000) 
// dp로 계속 합을 구하지 않도록 하여 O(3*3) <= <= O(1000*1000) 으로 해결 할 수 있도록 하였다.