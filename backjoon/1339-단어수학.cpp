#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <math.h>
using namespace std;


vector<int> alphabets(26, 0);
vector<int> nums(26, 0);
vector<string> strVec;
int N;
int maximum = -987654321;

struct ch{
	char ch;
	int num;
};

bool comp(ch a, ch b) {
	if (a.num > b.num) {
		return true;
	}
	else {
		return false;
	}
}
int main()
{
	cin >> N;
	vector<string> strVec;
	for (int i = 0; i < N; i++) {
		string input;
		cin >> input;
		strVec.push_back(input);
		for (int j = input.size() - 1; j >= 0 ; j--) {
			alphabets[input[j] - 'A'] += pow(10, input.size() -1 - j);
		}
	}

	vector<ch> vec;
	for (int i = 0; i < alphabets.size(); i++) {
		if (alphabets[i] != 0) {
			ch item = { 'A' + i, alphabets[i] };
			vec.push_back(item);
		}
	}
	sort(vec.begin(), vec.end(), comp);

	int topNum = 9;
	for (int i = 0; i < vec.size(); i++) {
		nums[vec[i].ch - 'A'] = topNum--;
	}

	int ans = 0;
	for (int i = 0; i < N; i++) {
		int sum = 0;
		for (int j = 0; j < strVec[i].size(); j++) {
			sum += nums[strVec[i][j] - 'A'] * pow(10, strVec[i].size() - 1 - j);
		}
		ans += sum;
	}

	cout << ans;
}
