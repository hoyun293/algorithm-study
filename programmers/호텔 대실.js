function solution(book_time) {
    let answer = 0;

    for(let i = 0; i < 3600; i++){
        let cnt = 0;
        for(let j = 0 ; j < book_time.length ; j++){
            let start = book_time[j][0];
            let end = book_time[j][1];

            let startMins = convertTime2Mins(start);
            let endMins = convertTime2Mins(end);
            if(endMins < (23*60 + 50)) endMins = endMins + 9;
            if(startMins <= i && i <= endMins){
                cnt++;
            }
        }
        if(cnt > answer) answer = cnt;
    }
    return answer;
}

function convertTime2Mins(time){
    let [hours, mins] = time.split(':');
    return Number(hours)*60 + Number(mins);
    
}