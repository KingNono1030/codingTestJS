function solution(n) {
    var answer = 0;
    const trit = n.toString(3);
    const reversed = [...trit].reverse().join('');
    answer = parseInt(reversed, 3)
    return answer;
}