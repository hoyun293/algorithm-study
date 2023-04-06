#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int UD[6] = { -2, -2, 0, 0, 2, 2 };
int LR[6] = { -1, 1, -2, 2, -1, 1 };
int N;
vector<vector<bool>> chessboard;
int r1, c1, r2, c2;

struct item {
	int y;
	int x;
	int cnt;
};

void bfs(int y, int x) {

	queue<item> que;
	que.push({ y , x , 0 });

	while (que.empty() == false) {
		item it = que.front();
		que.pop();

		int y = it.y;
		int x = it.x;
		int cnt = it.cnt;
		if (y == r2 && x == c2) {
			cout << cnt << endl;
			return;
		}
		for (int i = 0; i < 6; i++) {
			int newY = y + UD[i];
			int newX = x + LR[i];

			if (0 <= newY && newY < N && 0 <= newX && newX < N && chessboard[newY][newX] == false) {
				chessboard[newY][newX] = true;
				que.push({ newY, newX, cnt + 1 });
			}
		}
	}
	cout << -1 << endl;
}

int main()
{
	cin >> N;
	cin >> r1 >> c1 >> r2 >> c2;

	for (int i = 0; i < N; i++) {
		vector<bool> row;
		for (int j = 0; j < N; j++) {
			row.push_back(false);
		}
		chessboard.push_back(row);
	}

	chessboard[r1][c1] = true;
	bfs(r1, c1);
}



