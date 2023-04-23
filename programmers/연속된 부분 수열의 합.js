function solution(sequence, k) {
    let answer = [];

    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let len = Number.MAX_SAFE_INTEGER;

    // 우측 포인터가 sequence를 초과한 것 자체가 더 이상 부분 수열의 합이 없음을 의미
    while(right !== sequence.length) {
        if(sum < k) {
            right++;
            sum += sequence[right];
        } else if(sum > k) {
            sum -= sequence[left];
            left++;
        } else if(sum === k) {
            let newLen = right - left + 1;
            if(len > newLen) {
                answer[0] = left;
                answer[1] = right;
                len = newLen;
            }
            right++;
            sum += sequence[right];
        }
        console.log(left, right, sum)
    }
    return answer;
}