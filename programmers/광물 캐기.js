let points = [
    {"diamond": 1, "iron": 1, "stone": 1},
    {"diamond": 5, "iron": 1, "stone": 1},
    {"diamond": 25, "iron": 5, "stone": 1}
];
let minimum = Number.MAX_VALUE;
function solution(picks, minerals) {
    let answer = 0;
    dfs(picks, minerals, 0, 0);
    answer = minimum;
    return answer;
}

function dfs(picks, minerals, point, step) {
    if(picks[0] === 0 && picks[1] === 0 && picks[2] === 0) {
        minimum = Math.min(minimum, point);
        return;
    }

    for(let i = 0; i < picks.length; i++) {
        if(picks[i] > 0) {
            let sum = 0;
            for(let j = step; j < step + 5; j++) {
                if(minerals.length <= j) {
                    minimum = Math.min(minimum, point + sum);
                    return;
                }
                sum += points[i][minerals[j]];
            }
            picks[i]--;
            dfs(picks, minerals, point + sum, step + 5);
            picks[i]++;
        }
    }
}