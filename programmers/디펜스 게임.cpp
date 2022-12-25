
#include<iostream>
#include<algorithm>
#include<queue>
using namespace std;

int solution(int n, int k, vector<int> enemy) {
    int answer = 0;
    priority_queue<int> pq;

    int remains = n;
    long long sum = 0;
    for (int i = 0; i < enemy.size(); i++) {
        pq.push(enemy[i]);
        sum += enemy[i];
        if (sum > remains) {
            if (k > 0) {
                sum -= pq.top();
                pq.pop();
                k--;
            }
            else {
                break;
            }
        }
        answer++;
    }
    return answer;
}

// 그리디가 아니고 브루트 포스도 아니고 정렬도 아니라 DP인줄 알고 DP로 접근을 했지만
// 명확한 점화식을 발견하지 못했다.
// 일반적인 정렬로 접근할 때 n*nlogn이 나와서 포기하였지만
// heap을 생각못했었다.