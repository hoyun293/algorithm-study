function solution(targets) {
    let answer = 0;

    targets.sort((a, b) => {
        if(a[1] > b[1]) {
            return 1;
        } else if(a[1] < b[1]) {
            return -1;
        } else {
            return a[0] - b[0]; // 두번째 원소에 대한 정렬은 크게 의미 없다.
        }
    });

    let cut = -1;

    for(let i = 0; i < targets.length; i++) {
        let left = targets[i][0];
        let right = targets[i][1];

        if(cut <= left) {
            answer++;
            cut = right;
        }
    }
    return answer;
}