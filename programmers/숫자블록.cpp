#include < string >
    #include < vector >
    #include < math.h >
    #include < algorithm >

    using namespace std;

int getBigNumber(int num) {
	int rootNum = floor(sqrt(num));

    vector < int > arr;
	bool flag = false;
    for(int i = 1; i <= rootNum; i++) {
        if(num % i == 0) {
            if(num / i > 10000000) {
                flag = true;
                arr.push_back(i);
            }
            else {
                arr.push_back(i);
                arr.push_back(num / i);
            }
        }
    }
    sort(arr.begin(), arr.end());
    if(flag) return arr[arr.size() - 1];
    else return arr[arr.size() - 2];
}

vector < int > solution(long long begin, long long end) {
    vector < int > answer;
    for(long long i = begin; i <= end; i++) {
        if(i == 1) {
            answer.push_back(0);
            continue;
        }

        answer.push_back(getBigNumber(i));
    }
    return answer;
}
