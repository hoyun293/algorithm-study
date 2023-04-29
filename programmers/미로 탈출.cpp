#include <string>
#include <vector>
#include <queue>

using namespace std;

int LR[4] = {-1, 0 , 1, 0};
int UD[4] = { 0, -1, 0, 1 };

struct info{
	pair<int, int> pos;
	int count;
};
int solution(vector<string> maps) {
	int answer = 0;
	int N = maps.size();
	int M = maps[0].size();

	int leverDis = -1;
	int exitDis = -1;

	vector<vector<bool>> visited(N, vector<bool>(M, false));
	vector<vector<bool>> visited2(N, vector<bool>(M, false));
	vector<vector<int>> map2(N, vector<int>(M, 0));
	queue<info> que;
	queue<info> que2;

	pair<int, int> start;
	pair<int, int> lever;
	// 시작점을 찾는다.
	bool find = false;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			if (maps[i][j] == 'S') {
				start = make_pair(i, j);
				find = true;
				break;
			}
		}
		if (find) break;
	}

	// 레버를 먼저 찾는다.
	visited[start.first][start.second] = true;
	que.push(info{ start, 0 });
	while (!que.empty()) {
		info cur = que.front();
		que.pop();

		if (maps[cur.pos.first][cur.pos.second] == 'L') {
			leverDis = cur.count;
			lever = make_pair(cur.pos.first, cur.pos.second);
			break;
		}
		for (int i = 0; i < 4; i++) {
			int next_y = cur.pos.first + UD[i];
			int next_x = cur.pos.second + LR[i];
			if (0 <= next_y && next_y < N && 0 <= next_x && next_x < M) {
				if (maps[next_y][next_x] != 'X') {
					if (visited[next_y][next_x] == false) {
						visited[next_y][next_x] = true;
						que.push(info{ make_pair(next_y, next_x), cur.count + 1 });
					}
				}
			}
		}
	}
	// 레버를 못 찾는 경우
	if (leverDis == -1) {
		return -1;
	}
	// 레버를 찾았으면 탈출구를 찾는다.
	visited2[lever.first][lever.second] = true;
	que2.push(info{ lever, 0 });
	while (!que2.empty()) {
		info cur = que2.front();
		que2.pop();
		if (maps[cur.pos.first][cur.pos.second] == 'E') {
			exitDis = cur.count;
			break;
		}
		for (int i = 0; i < 4; i++) {
			int next_y = cur.pos.first + UD[i];
			int next_x = cur.pos.second + LR[i];
			if (0 <= next_y && next_y < N && 0 <= next_x && next_x < M) {
				if (maps[next_y][next_x] != 'X') {
					if (visited2[next_y][next_x] == false) {
						visited2[next_y][next_x] = true;
						que2.push(info{ make_pair(next_y, next_x), cur.count + 1 });
					}
				}
			}
		}
	}

	// 출구를 못 찾는 경우
	if (exitDis == -1) {
		return -1;
	}
	answer = leverDis + exitDis;
	return answer;
}