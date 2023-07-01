#include <iostream>
#include <vector>
#include <queue>
#define INF 987654321

using namespace std;
vector<int> d;
vector<vector<pair<int, int>>> a;

void dijkstra(int start){
   d[start] = 0;
   priority_queue<pair<int,int>> pq;
   pq.push(make_pair(0, start));
    
   while(!pq.empty()){
       pair<int, int> p = pq.top();
       pq.pop();
       int current = p.second;
       int distance = p.first * -1;
       if(d[current] < distance) continue;
       
       for(int i = 0 ; i < a[current].size(); i++){
           int next = a[current][i].first;
           int nextDistance = a[current][i].second;
           
           if(distance + nextDistance < d[next]){
               d[next] = distance + nextDistance;
               pq.push(make_pair(-1*(distance + nextDistance), next));
           }
       }
       
   }
   
}

int solution(int N, vector<vector<int>> road, int K) {
    int answer = 0;
    // vector init
    for(int i = 0 ; i <= N; i++){
        vector<pair<int,int>> pairVec;
        a.push_back(pairVec);
    }
    // 기본적으로 연결되지 않은 경우 비용은 무한
    for(int i = 0 ; i <= N; i++){
        d.push_back(INF);
    }
    // 서로 연결된 부분을 연결
    for(int i = 0 ; i < road.size(); i++){
        int start = road[i][0];
        int end = road[i][1];
        int cost = road[i][2];
        pair<int,int> p = make_pair(end, cost);
        pair<int,int> p2= make_pair(start, cost);
        
        a[start].push_back(p);
        a[end].push_back(p2);
    }
    dijkstra(1);
    for(int i = 1 ; i <= N ; i++){
        if(d[i] <= K) answer++;
    }
    return answer;
}

