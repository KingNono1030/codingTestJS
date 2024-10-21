function solution(numbers) {
    const sumArr = [];
    numbers.forEach((fixed, index) => {
        const rest = numbers.slice(index + 1);
        rest.forEach(item => sumArr.push(fixed + item));
    })
    const answer = [...new Set(sumArr)].sort((a, b) => a - b);
    return answer;
}