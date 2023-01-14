
#include <cstdio>
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <set>

using namespace std;


// 각 수열의 마지막 공백
// 마지막 줄 개행문자  
// 제거하지 않아도 된다. 
int main()
{
	int M, N;
	vector<int> inputs;
	set<vector<int>> s;
	cin >> N >> M;

	for (int i = 0; i < N; i++) {
		int elem;
		cin >> elem;
		inputs.push_back(elem);
	}
	sort(inputs.begin(), inputs.end());
	do {
		vector<int> tempVec;
		for (int i = 0; i < M; i++) {
			tempVec.push_back(inputs[i]);
		}
		s.insert(tempVec);
	} while (next_permutation(inputs.begin(), inputs.end()));

	string rslt = "";
	for (vector<int> vec : s) {
		for (int i = 0; i < vec.size(); i++) {
			rslt += to_string(vec[i]) + " ";
		}
		rslt = rslt.substr(0, rslt.size() - 1);
		rslt += "\n";
	}
	rslt = rslt.substr(0, rslt.size() - 1);
	printf("%s", rslt.c_str());
}


/*
* set 자료구조는 선입선출이아니라 내부적으로 정렬을 해놓는다
* 아래처럼 문자열을 set에 넣어놔서 중복을 제거하였지만 내부적으로 정렬을 시도하기 때문에
* 1000 20 30 40 이런케이스에   20 30 40 1000 으로 처리하지 않고 1000 20 30 40 으로 처리되서 실패
* 하지만 위의 솔루션처럼 vector로 처리하면 위와 같이 처리 되지 않는다. 
* vector에 넣을 때 int로 넣기 때문에 위와 같은 현상이 발생안함!
int main()
{
	int M, N;
	vector<int> inputs;
	set<string> s;
	cin >> N >> M;

	for (int i = 0; i < N; i++) {
		int elem;
		cin >> elem;
		inputs.push_back(elem);
	}

	sort(inputs.begin(), inputs.end());

	do {
		string temp = "";
		for (int i = 0; i < M; i++) {
			temp += to_string(inputs[i]);
			temp += " ";
		}
		temp = temp.substr(0, temp.size() - 1);
		s.insert(temp);
	}while(next_permutation(inputs.begin(), inputs.end()));

	string rslt = "";
	for (string str : s) {
		rslt += str + "\n";
	}
	rslt = rslt.substr(0, rslt.size() - 1);
	printf("%s", rslt.c_str());
}
*/
