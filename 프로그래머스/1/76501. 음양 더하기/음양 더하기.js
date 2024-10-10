function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc, cur, index) => {
        return signs[index] ? acc + cur : acc - cur;
    }, 0);
    return answer;
}