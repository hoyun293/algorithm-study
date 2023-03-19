function solution(n, m, section) {
    let answer = 0;

    let start = section[0];
    let end = start + m - 1;
    if(end > n) {
        end = n;
        start = end - m + 1;
    }
    answer++;
    for(let i = 0; i < section.length; i++) {
        if(start <= section[i] && section[i] <= end) {
            // Do Nothing
        } else {
            start = section[i];
            end = start + m - 1;
            if(end > n) {
                end = n;
                start = end - m + 1;
            }
            answer++;
        }
    }
    return answer;
}