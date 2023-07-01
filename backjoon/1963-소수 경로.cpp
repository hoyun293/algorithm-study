#include <queue>
#include <vector>
#include <iostream>
#include <math.h>

using namespace std;
bool visited[10001];

bool isPrimeNumber(int num) {
    int x = floor(sqrt(num));
    int cnt = 0;
    for (int i = 1; i <= x; i++) {
        if (num % i == 0) cnt++;
    }
    if (cnt > 1) {
        return false;
    }
    else {
        return true;
    }
}

int bfs(int start, int to) {

    queue<pair<int, int>> queue;
    queue.push({ start, 0 });

    while (!queue.empty()) {
        int num = queue.front().first;
        int cnt = queue.front().second;
        queue.pop();

        if (num == to) {
            return cnt;
        }

        // 첫째자리
        int nextNum;
        int idx = to_string(num)[0] - '0';
        for (int i = 1; i < 10; i++) {
            nextNum = num - idx * 1000;
            nextNum += i * 1000;
            if (visited[nextNum] == false) {
                visited[nextNum] = true;
                if (isPrimeNumber(nextNum)) queue.push({ nextNum, cnt + 1 });
            }
        }
        // 둘째자리

        idx = to_string(num)[1] - '0';
        for (int i = 0; i < 10; i++) {
            nextNum = num - idx * 100;
            nextNum += i * 100;
            if (visited[nextNum] == false) {
                visited[nextNum] = true;
                if (isPrimeNumber(nextNum)) queue.push({ nextNum, cnt + 1 });
            }
        }
        // 셋째자리
        idx = to_string(num)[2] - '0';
        for (int i = 0; i < 10; i++) {
            nextNum = num - idx * 10;
            nextNum += i * 10;
            if (visited[nextNum] == false) {
                visited[nextNum] = true;
                if (isPrimeNumber(nextNum)) queue.push({ nextNum, cnt + 1 });
            }
        }
        // 넷째자리
        idx = to_string(num)[3] - '0';
        for (int i = 0; i < 10; i++) {
            nextNum = num - idx;
            nextNum += i;
            if (visited[nextNum] == false) {
                visited[nextNum] = true;
                if (isPrimeNumber(nextNum)) queue.push({ nextNum, cnt + 1 });
            }
        }
    }

    return -1;
}



int main() {
    vector<pair<int, int>> inputs;
    vector<int> ans;
    int N;
    int from, to;
    cin >> N;
    
    for (int i = 0; i < N; i++) {
        cin >> from >> to;
        fill_n(visited, 10001, false);
        visited[from] = true;
        ans.push_back(bfs(from, to));
    }
    for (int i = 0; i < ans.size(); i++) {
        if (ans[i] == -1) {
            cout << "Impossible" << endl;
        }
        else {
            cout << ans[i] << endl;
        }
    }
    return 0;
}

