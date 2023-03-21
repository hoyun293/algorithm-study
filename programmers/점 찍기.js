function solution(k, d) {
    let answer = 0;

    let i = 0;
    let len = 0;
    while(len <= d) {
        let x = len;
        let yy = d * d - x * x;

        answer += Math.floor(Math.floor(Math.sqrt(yy)) / k) + 1;
        i++;
        len = i * k;
    }
    return answer;
}