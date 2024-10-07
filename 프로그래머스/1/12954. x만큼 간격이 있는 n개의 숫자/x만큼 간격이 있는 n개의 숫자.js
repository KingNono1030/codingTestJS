function solution(x, n) {
    const arr = Array.from({ length: n });
    const answer = arr.map((_, index) => x * (index + 1));
    return answer;
}