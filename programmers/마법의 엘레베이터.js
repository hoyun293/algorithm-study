function solution(storey) {
    let answer = 0;
    let step = 10;
    while(true){
        let current = ((storey % step) + '')[0];
        // 6이상이면 올리고 4이하면 내린다.
        if(+current > 5){
            answer += (10 - (+current)); 
            storey += (10 - (+current))*(step/10);
        }else if(+current < 5){
            answer += (+current);
            storey -= (+current)*(step/10);
        }else if(+current === 5){
            // 5인 경우 앞자리 수에 따라 달라진다.
            // 앞자리가 6이상이면 올리고 4이하면 내린다.
            let next = ((storey % (step*10)) + '')[0];
            
            if((storey % (step*10)) === (storey % (step))){ // 마지막 자리인경우 5면 내린다.
                answer +=5;
                storey -= (+current)*(step/10);
            }else{
                if(next < 5){
                    answer += (+current);
                    storey -= (+current)*(step/10);
                }else{
                    answer += (10 - (+current)); 
                    storey += (10 - (+current))*(step/10);
                }
            }
        }
        if(storey === 0){
            break;
        }
        step = step*10;
    }    
    return answer;
}