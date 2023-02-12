function solution(gems) {
    const cnt = new Set(gems).size;
    const gemMap = new Map();
    let ansArr =[];
    let start = 0, end = 0;
    let curNum = 0;
    while(true){
        if(curNum === cnt){
            gemMap.set(gems[start],gemMap.get(gems[start])-1);
            if(gemMap.get(gems[start]) === 0){
                gemMap.delete(gems[start]);
                curNum--;
            }
            start++;
        }else if(end === gems.length){
            break;
        }else if(curNum < cnt){
            if(gemMap.has(gems[end]) === false){
                curNum++;
            }
            gemMap.set(gems[end], (gemMap.get(gems[end]) || 0) + 1);
            end++;
        }
        
        if(curNum === cnt){
            let a = start + 1;
            let b = end;
            let leng = b-a+1;
            ansArr.push({start: a, end: b, length: leng});
        }
    }
    
    ansArr.sort((a,b)=>{
       return a.length - b.length; 
    });
    let [ansStart, ansEnd] = [ansArr[0].start, ansArr[0].end];
    let answer =[];
    answer.push(ansStart);
    answer.push(ansEnd);
    
    return answer;
}