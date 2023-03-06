int solution(int x, int y, int n) {
    int answer = 0;
    answer = bfs(x, y, n);
    return answer;
}

int bfs(int x, int y, int n) {
    vector<bool> visited(1000001, false);

    queue<pair<int, int>> que;
    que.push(make_pair(x, 0));
    while (que.size() != 0) {
        pair<int, int> p = que.front();
        que.pop();
        int pos = p.first;
        int count = p.second;
        if (pos ==  y) {
            return count;
            break;
        }
        if (visited[pos + n] == false && (pos + n) <= 1000000) {
            que.push(make_pair(pos + n , count + 1));
            visited[pos + n] = true;
        }
        if (visited[pos * 2] == false && (pos * 2) <= 1000000) {
            que.push(make_pair(pos * 2, count + 1));
            visited[pos * 2] = true;
        }
        if (visited[pos * 3] == false && (pos * 3) <= 1000000) {
            que.push(make_pair(pos * 3, count + 1));
            visited[pos * 3] = true;
        }

    }
    return -1;
}

// 자바스크립트 내장 배열객체사용시 다른 언어와 다르게 shift() 가 O(n)이 소요되어
// 백준 숨바꼭질문제와는 다르게 시간초과가 걸리게 된다. N이 많아질 경우 자바스크립트 배열을 사용하지 않음을 고려해야한다.

