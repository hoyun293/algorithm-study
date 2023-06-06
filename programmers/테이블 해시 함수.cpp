#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int idx;
bool compare(vector<int> v1, vector<int> v2) {
    if (v1[idx] > v2[idx]) {
        return false;
    }
    else if(v1[idx] < v2[idx]){
        return true;
    }
    else if (v1[idx] == v2[idx]) {
        if (v1[0] > v2[0]) {
            return true;
        }
        else {
            return false;
        }
    }
}
int solution(vector<vector<int>> data, int col, int row_begin, int row_end) {
    int answer = 0;
    idx = col - 1;
    vector<long> sVec;
    sort(data.begin(), data.end(), compare);

    for (int i = row_begin - 1; i <= row_end - 1; i++) {
        long sum = 0;
        for (int j = 0; j < data[0].size(); j++) {
            sum += data[i][j] % (i+1);
        }
        sVec.push_back(sum);
    }

    for (int i = 0; i < sVec.size(); i++) {
        answer = answer ^ sVec[i];
    }

    return answer;
}