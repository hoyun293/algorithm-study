#include <string>
#include <vector>
#include <stack>
#include <algorithm>
#include <iostream>

using namespace std;
struct assignment {
    string subject;
    int start;
    int elapse;
};

int convertTime(string time) {
    int convertTime = 0;

    int hours = stoi(time.substr(0, 2)) * 60;
    int mins = stoi(time.substr(3, 2));

    convertTime = hours + mins;
    return convertTime;
}

bool compare(assignment a1, assignment a2) {
    if (a1.start < a2.start) {
        return true;
    }
    else {
        return false;
    }
}

vector<string> solution(vector<vector<string>> plans) {
    vector<string> answer;
    vector<assignment> assigns;
    stack<assignment> assignStack;
    int currentTime;
    for (int i = 0; i < plans.size(); i++) {
        assignment ass = { plans[i][0], convertTime(plans[i][1]), stoi(plans[i][2])} ;
        assigns.push_back(ass);
    }

    sort(assigns.begin(), assigns.end(), compare);
    for (int i = 0; i < assigns.size() - 1; i++) {
        assignment cur = assigns[i];
        assignment next = assigns[i + 1];
        if (cur.start + cur.elapse > next.start) {
            // 다음 과제전에 완료 못함
            cur.elapse -= next.start - (cur.start);
            assignStack.push(cur);
        }
        else {
            answer.push_back(cur.subject);
            currentTime = cur.start + cur.elapse;
            while (assignStack.size() != 0) {
                assignment latest = assignStack.top();
                if (currentTime + latest.elapse <= next.start) {
                    answer.push_back(latest.subject);
                    assignStack.pop();
                    currentTime += latest.elapse;
                }
                else {
                    assignStack.top().elapse -= next.start - (currentTime);
                    currentTime = next.start;
                    break;
                }
            }
        }
    }
    
    // 마지막 과제는 다음 과제가 없기 때문에 무조건 완료한다.
    answer.push_back(assigns[assigns.size() - 1].subject);
    // 처리해야할 과제는 다 완료했으므로 미룬 과제를 한다.
    while (!assignStack.empty()) {
        assignment assign = assignStack.top();
        assignStack.pop();
        answer.push_back(assign.subject);
    }

    return answer;
}