#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

bool comparator(int a, int b)
{
    if(a < b){
        return true;
    }else{
        return false;
    }
}

int ratio[4][2] = {
    {1,1},
    {2,1},
    {3,2},
    {4,3}
};
long long solution(vector<int> weights) {
    long long answer = 0;
    
    sort(weights.begin(), weights.end(), comparator);
    for(int i = 0 ; i < weights.size() - 1; i++){
        for(int j = 0 ; j < 4; j++){
            if((weights[i]*ratio[j][0])%ratio[j][1] != 0) continue;
            answer += upper_bound(weights.begin() + i + 1, weights.end(), (weights[i]*ratio[j][0])/ratio[j][1]) 
                - lower_bound(weights.begin() + i + 1, weights.end(), (weights[i]*ratio[j][0]/ratio[j][1]));
        }
    }
    return answer;
}


/*
1. ratio를 2차원배열로 처리안하고 함수 여러개로 하드코딩했던 부분이 아쉬움.
    int ratio[4][2] = {
    {1,1},
    {2,1},
    {3,2},
    {4,3}
2. 1/2, 2/3, 3/4를 곱해서 나누어 떨어지는 수를 찾는 방법을 깔끔하게 알지 못해서   -> 나누어 떨어지는 수만 가지고 내장 이진탐색 함수를 사용하면 좋다.
    weights[mid]*3 < val*4  이런식으로 이진탐색을 하려한 시도가 아쉬움

};

*/