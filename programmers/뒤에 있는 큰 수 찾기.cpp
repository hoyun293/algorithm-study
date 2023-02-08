#include <string>
#include <vector>
#include <queue>
#include <iostream>
using namespace std;

vector<int> solution(vector<int> numbers) {
    vector<int> answer(numbers.size(), -1);
    
    priority_queue<pair<int,int>> pq;
    
    for(int i = 0 ; i < numbers.size(); i++)
    {
        pair<int, int> p = make_pair(numbers[i]*-1, i*-1);
       
        while(pq.empty() == false && pq.top().first*-1 < numbers[i])
        {
            pair<int,int> p = pq.top();
            pq.pop();
            answer[p.second*-1] = numbers[i];
            
        }
        pq.push(p);
    }
    
    return answer;
}