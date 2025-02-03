function solution(numbers) {
    const answer = [];
    for (let i of numbers) {
        let num = i;
        let cnt = 0;
        while (i % 2 === 1) {
            cnt += 1;
            i = Math.floor(i / 2);  // 정수 나누기
        }
        // cnt가 0이 아니면 num + 2^(cnt - 1), 아니면 num + 1
        answer.push(cnt !== 0 ? num + Math.pow(2, cnt - 1) : num + 1);
    }
    return answer;
}
