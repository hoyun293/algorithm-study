
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

// �׸��� �ƴϰ� ���Ʈ ������ �ƴϰ� ���ĵ� �ƴ϶� DP���� �˰� DP�� ������ ������
// ��Ȯ�� ��ȭ���� �߰����� ���ߴ�.
// �Ϲ����� ���ķ� ������ �� n*nlogn�� ���ͼ� �����Ͽ�����
// heap�� �������߾���.