#include <string>
#include <vector>
#include <iostream>
using namespace std;

vector<vector<string>> g_places;
int directions[12][2] = {
                 {-2, 0},
        {-1, -1},{-1, 0},{-1, 1},
{0, -2},{0, -1},         {0, 1},{0, 2},
        {1, -1}, {1, 0}, {1, 1},
                 {2, 0}
};
bool check(int i, int j, int k) {
    for (int x = 0; x < 12; x++) {
        int newY = j + directions[x][0];
        int newX = k + directions[x][1];

        if (newY < 0 || newY > 4 || newX < 0 || newX > 4) {
            continue;
        }

        if (g_places[i][newY][newX] != 'P') {
            continue;
        }
        if(x == 0){
            if(g_places[i][newY + 1][newX] != 'X')
                return false;
        }
        else if (x == 1) {
            if (g_places[i][newY + 1][newX] != 'X' && g_places[i][newY][newX + 1] != 'X') {
                return false;
            }
        }
        else if (x == 2) {
            return false;
        }
        else if (x == 3) {
            if (g_places[i][newY + 1][newX] != 'X' && g_places[i][newY][newX - 1] != 'X') {
                return false;
            }
        }
        else if (x == 4) {
            if(g_places[i][newY][newX + 1] != 'X')
                return false;
        }
        else if (x == 5) {
            return false;
        }
        else if(x == 6){
            return false;
        }
        else if(x == 7){
            if(g_places[i][newY][newX - 1] != 'X')
                return false;
        }
        else if (x == 8) {
            if (g_places[i][newY - 1][newX] != 'X' || g_places[i][newY][newX + 1] != 'X') {
                return false;
            }
        }
        else if (x == 9) {
            return false;
        }
        else if (x == 10) {
            if (g_places[i][newY - 1][newX] != 'X' || g_places[i][newY][newX - 1] != 'X') {
                return false;
            }
        }
        else if(x == 11){
            if(g_places[i][newY - 1][newX] != 'X')
                return false;
        }
  }
  return true;
    
}
vector<int> solution(vector<vector<string>> places) {
    vector<int> answer;
    g_places = places;
    for (int i = 0; i < 5; i++) {
        bool flag = true;
        for (int j = 0; j < 5; j++) {
            for (int k = 0; k < 5; k++) {
                if (places[i][j][k] == 'P') {
                    if (check(i, j, k) == false) {
                        answer.push_back(0);
                        flag = false;
                        break;
                    }
                }
            }
            if (flag == false) break;
        }
        if (flag) answer.push_back(1);
    }
    return answer;
}