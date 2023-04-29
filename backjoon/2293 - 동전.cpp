#include <iostream>
#include <vector>
using namespace std;

int main()
{
	int n, k;
	cin >> n >> k;
	vector<int> coins;
	vector<int> dp(k + 1, 0);
	for (int i = 0; i < n; i++) {
		int coin;
		cin >> coin;
		coins.push_back(coin);
	}
	dp[0] = 1;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < k; j++) {
			if (j + coins[i] > k) continue;
			dp[j + coins[i]] += dp[j];
		}
	}

	cout << dp[k] << endl;
}


