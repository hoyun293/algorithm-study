#include <iostream>
#include <vector>
#include <queue>

using namespace std;
#define INF 987654321

vector<vector<pair<int, int>>> m;
vector<vector<pair<int, int>>> m2;

vector<int> d;

void dijkstra(int start, bool reverse) {
    d[start] = 0;
    priority_queue<pair<int, int>> pq;

    pq.push({ 0, start });
    while (!pq.empty()) {
        int current = pq.top().second;
        int distance = pq.top().first * -1;
        pq.pop();
        if (d[current] < distance) continue;
        if (reverse == false) {
            for (int i = 0; i < m[current].size(); i++) {
                int next = m[current][i].first;
                int nextDistance = distance + m[current][i].second;
                if (nextDistance < d[next]) {
                    d[next] = nextDistance;
                    pq.push({ -1 * nextDistance, next });
                }
            }
        }
        else {
            for (int i = 0; i < m2[current].size(); i++) {
                int next = m2[current][i].first;
                int nextDistance = distance + m2[current][i].second;
                if (nextDistance < d[next]) {
                    d[next] = nextDistance;
                    pq.push({ -1 * nextDistance, next });
                }
            }
        }
    }
}
void initDistance(int N) {
    if (!d.empty()) d.clear();
    for (int i = 0; i <= N; i++) {
        d.push_back(INF);
    }
}
int main() {
    int N, M, X;
    vector<int> d2x;
    vector<int> x2d;
    vector<int> sum;

    // dummy
    d2x.push_back(0);
    x2d.push_back(0);

    cin >> N >> M >> X;

    // init Distance
    initDistance(N);
    // init vector
    for (int i = 0; i <= N; i++) {
        vector<pair<int, int>> pairVec;
        m.push_back(pairVec);
        m2.push_back(pairVec);
    }

    for (int i = 0; i < M; i++) {
        int start, end, time;
        cin >> start >> end >> time;
        m[start].push_back({ end, time });
        m2[end].push_back({ start, time });
    }

    // X로 가는 거리를 구한다.
    dijkstra(X, true);
    for (int i = 1; i <= N; i++) {
        d2x.push_back(d[i]);
    }
    initDistance(N);
    // X에서 돌아오는 거리를 구한다.
    dijkstra(X, false);
    for (int i = 1; i <= N; i++) {
        x2d.push_back(d[i]);
    }

    for (int i = 1; i <= N; i++) {
        sum.push_back(d2x[i] + x2d[i]);
    }

    int maxi = -1;
    for (int i = 0; i < sum.size(); i++) {
        if (maxi < sum[i]) maxi = sum[i];
    }

    cout << maxi << endl;
    return 0;
}