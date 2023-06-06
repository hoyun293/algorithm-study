#include <string>
#include <vector>
#include <unordered_map>
using namespace std;
 
unordered_map<long long, long long> rooms;
long long find(long long number) {
    if (rooms.count(number) == 0) {
        rooms[number] = number + 1;
        return number + 1;
    }
    else {
        return rooms[number] = find(rooms[number]);
    }
}
vector<long long> solution(long long k, vector<long long> room_number) {
    vector<long long> answer;
    for (int i = 0; i < room_number.size(); i++) {
        answer.push_back(find(room_number[i]) - 1);
    }
    return answer;
}

// map은 logN의 속도 unordered_map은 O(1)의 속도

// unorderd_map<long long, int> 로 하면 시간초과지만 unordered_map<long long, long long> 으로 하면 통과