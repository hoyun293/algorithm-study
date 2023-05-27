#include <string>
#include <vector>
#include <queue>
using namespace std;

int sy, sx, ey, ex;

struct item {
    int y;
    int x;
    int step;
};
int bfs(vector<vector<bool>> visited, vector<string> board) {
    queue<item> que;

    que.push(item{sy, sx, 0});
    while (!que.empty()) {
        item cur = que.front();
        que.pop();
        int cury = cur.y;
        int curx = cur.x;

        if (board[cury][curx] == 'G') {
            return cur.step;
        }

        if (0 <= cury && cury < visited.size() && 0 <= curx && curx < visited[0].size()) {
            // 상
            if (cury == 0 || board[cury - 1][curx] == 'D') {
                // skip
            }
            else {
                while (true) {
                    cury--;
                    if (cury == 0 || board[cury - 1][curx] == 'D') {
                        if (visited[cury][curx] == false) {
                            visited[cury][curx] = true;
                            que.push({ cury, curx, cur.step + 1 });
                        }
                        break;
                    }
                }
            }
            cury = cur.y;
            // 하
            if (cury == board.size() - 1 || board[cury + 1][curx] == 'D') {
                // skip
            }
            else {
                while (true) {
                    cury++;
                    if (cury == board.size() - 1 || board[cury + 1][curx] == 'D') {
                        if (visited[cury][curx] == false) {
                            visited[cury][curx] = true;
                            que.push({ cury, curx, cur.step + 1 });
                        }
                        break;
                    }
                }
            }
            cury = cur.y;
            // 좌
            if (curx == 0 || board[cury][curx - 1] == 'D') {
                // skip
            }
            else {
                while (true) {
                    curx--;
                    if (curx == 0 || board[cury][curx - 1] == 'D') {
                        if (visited[cury][curx] == false) {
                            visited[cury][curx] = true;
                            que.push({ cury, curx, cur.step + 1 });
                        }
                        break;
                    }
                }
            }
            curx = cur.x;
            // 우
            if (curx == board[0].size() - 1 || board[cury][curx + 1] == 'D') {
                // skip
            }
            else {
                while (true) {
                    curx++;
                    if (curx == board[0].size() - 1 || board[cury][curx + 1] == 'D') {
                        if (visited[cury][curx] == false) {
                            visited[cury][curx] = true;
                            que.push({ cury, curx, cur.step + 1 });
                        }
                        break;
                    }
                }
            }
        }
    }
   return -1;
}
int solution(vector<string> board) {
    int answer = 0;
    vector<vector<bool>> visited(board.size(), vector<bool>(board[0].length(), false));

    for (int i = 0; i < board.size(); i++) {
        for(int j = 0 ; j < board[0].size(); j++){
            if (board[i][j] == 'R') {
                sy = i;
                sx = j;
            }
            else if (board[i][j] == 'G') {
                ey = i;
                ex = j;
            }
        }
    }

    visited[sy][sx] = true;
    answer = bfs(visited, board);
    return answer;
}