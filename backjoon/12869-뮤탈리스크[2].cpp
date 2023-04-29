#include <queue>
#include <vector>
#include <iostream>

using namespace std;
struct scvLifes {
	int a;
	int b;
	int c;
	int count;
};

vector<vector<int>> combs = {
	{9, 3, 1},
	{9, 1, 3},
	{3, 9, 1},
	{3, 1, 9},
	{1, 9, 3},
	{1, 3, 9},
};

vector<vector<vector<bool>>> visited(61, vector<vector<bool>>(61, vector<bool>(61, false)));
queue<scvLifes> que;

int main()
{
	int N;
	vector<int> scvInitLifes;
	cin >> N;

	for (int i = 0; i < N; i++) {
		int scvLife;
		cin >> scvLife;
		scvInitLifes.push_back(scvLife);
	}
	if (scvInitLifes.size() < 3) {
		int len = scvInitLifes.size();
		for (int i = 0; i < 3 - len; i++) {
			scvInitLifes.push_back(0);
		}
	}

	visited[scvInitLifes[0]][scvInitLifes[1]][scvInitLifes[2]] = true;
	que.push(scvLifes{ scvInitLifes[0], scvInitLifes[1], scvInitLifes[2] ,0 });

	while (!que.empty()) {
		scvLifes cur = que.front();
		que.pop();

		int a = cur.a;
		int b = cur.b;
		int c = cur.c;

		if (a == 0 && b == 0 && c == 0) {
			cout << cur.count << endl;
			break;
		}

		for (int i = 0; i < 6; i++) {
			int next_a = a - combs[i][0] > 0 ? a - combs[i][0] : 0;
			int next_b = b - combs[i][1] > 0 ? b - combs[i][1] : 0;
			int next_c = c - combs[i][2] > 0 ? c - combs[i][2] : 0;
					
			if (visited[next_a][next_b][next_c] == false) {
				visited[next_a][next_b][next_c] = true;
				que.push({ next_a, next_b, next_c, cur.count + 1 });
			}
		}
	}
}



