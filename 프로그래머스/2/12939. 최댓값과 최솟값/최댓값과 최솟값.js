function solution(s) {
    const sNumArr = s.split(' ').map(Number);
    const answer = `${Math.min(...sNumArr)} ${Math.max(...sNumArr)}`;
    return answer;
}