#include < queue >
    #include < iostream >
    #include < vector >
    using namespace std;
struct scvLifes {
	int a;
	int b;
	int c;
	int count;
};

struct scvLifes2 {
	int a;
	int b;
	int count;
};

vector < vector < int >> combs = {
    {9, 3, 1},
    {9, 1, 3},
    {3, 9, 1},
    {3, 1, 9},
    {1, 9, 3},
    {1, 3, 9},
    {0, 9, 3},
    {0, 3, 9},
    {9, 0, 3},
    {3, 0, 9},
    {9, 3, 0},
    {3, 9, 0},
    {0, 0, 9},
    {0, 9, 0},
    {9, 0, 0}
};

vector < vector < int >> combs2 = {
    {9, 3},
    {3, 9},
    {0, 9},
    {9, 0}
};
vector < vector < vector < bool >>> visited(61, vector < vector < bool >> (61, vector < bool > (61, false)));
vector < vector < bool >> visited2(61, vector < bool > (61, false));
queue < scvLifes > que;
queue < scvLifes2 > que2;

void calc(int start, int end, int cur_idx_a, int cur_idx_b, int cur_idx_c, int count) {
    for(int i = start; i < end; i++) {
		int comb_a = combs[i][0];
		int comb_b = combs[i][1];
		int comb_c = combs[i][2];

		int temp_a = cur_idx_a;
		int temp_b = cur_idx_b;
		int temp_c = cur_idx_c;

        if(temp_a - comb_a <= 0)
            temp_a = 0;
        else
            temp_a = temp_a - comb_a;

        if(temp_b - comb_b <= 0)
            temp_b = 0;
        else
            temp_b = temp_b - comb_b;

        if(temp_c - comb_c <= 0)
            temp_c = 0;
        else
            temp_c = temp_c - comb_c;

        if(visited[temp_a][temp_b][temp_c] == false) {
			scvLifes next = {temp_a, temp_b, temp_c, count + 1
        };
        visited[temp_a][temp_b][temp_c] = true;
        que.push(next);
    }
}
}
void calc2(int start, int end, int cur_idx_a, int cur_idx_b, int count) {
    for(int i = start; i < end; i++) {
		int comb_a = combs2[i][0];
		int comb_b = combs2[i][1];

		int temp_a = cur_idx_a;
		int temp_b = cur_idx_b;

        if(temp_a - comb_a <= 0)
            temp_a = 0;
        else
            temp_a = temp_a - comb_a;

        if(temp_b - comb_b <= 0)
            temp_b = 0;
        else
            temp_b = temp_b - comb_b;

        if(visited2[temp_a][temp_b] == false) {
			scvLifes2 next = {temp_a, temp_b, count + 1
        };
        visited2[temp_a][temp_b] = true;
        que2.push(next);
    }
}
}
int main()
{
	int N;
    vector < int > scvInitLifes;
    cin >> N;

    for(int i = 0; i < N; i++) {
		int scvLife;
        cin >> scvLife;
        scvInitLifes.push_back(scvLife);
    }

    if(N == 3) {
		scvLifes init = {scvInitLifes[0], scvInitLifes[1], scvInitLifes[2], 0 };
        que.push(init);

        while(!que.empty()) {
			scvLifes cur = que.front();
            que.pop();

			int cur_a = cur.a;
			int cur_b = cur.b;
			int cur_c = cur.c;

            if(cur_a == 0 && cur_b == 0 && cur_c == 0) {
                cout << cur.count;
                break;
            }

            if(cur_a == 0 && cur_b == 0 && cur_c > 0) {
                calc(12, 13, cur_a, cur_b, cur_c, cur.count);
            }
            else if(cur_a <= 0 && cur_c <= 0 && cur_b > 0) {
                calc(13, 14, cur_a, cur_b, cur_c, cur.count);
            }
            else if(cur_b <= 0 && cur_c <= 0 && cur_a > 0) {
                calc(14, 15, cur_a, cur_b, cur_c, cur.count);
            }
            else if(cur_a == 0 && cur_b > 0 && cur_c > 0) {
                calc(6, 8, cur_a, cur_b, cur_c, cur.count);
            }
            else if(cur_b <= 0 && cur_a > 0 && cur_c > 0) {
                calc(8, 10, cur_a, cur_b, cur_c, cur.count);
            }
            else if(cur_c <= 0 && cur_a > 0 && cur_b > 0) {
                calc(10, 12, cur_a, cur_b, cur_c, cur.count);
            }
            else if(cur_a > 0 && cur_b > 0 && cur_c > 0) {
                calc(0, 6, cur_a, cur_b, cur_c, cur.count);
            }
        }
    }
    else if(N == 2) {
		scvLifes2 init = {scvInitLifes[0], scvInitLifes[1], 0 };
        que2.push(init);

        while(!que2.empty()) {
			scvLifes2 cur = que2.front();
            que2.pop();

			int cur_a = cur.a;
			int cur_b = cur.b;

            if(cur_a == 0 && cur_b == 0) {
                cout << cur.count;
                break;
            }

            if(cur_a == 0 && cur_b > 0) {
                calc2(2, 3, cur_a, cur_b, cur.count);
            }
            else if(cur_a > 0 && cur_b == 0) {
                calc2(3, 4, cur_a, cur_b, cur.count);
            }
            else if(cur_a > 0 && cur_b > 0) {
                calc2(0, 2, cur_a, cur_b, cur.count);
            }
        }
    }
    else if(N == 1) {
		int count = scvInitLifes[0] % 9 == 0 ? (scvInitLifes[0] / 9) : (scvInitLifes[0] / 9 + 1);
        cout << count << endl;
    }

}

