function solution(numbers) {
    let totalSum = 0;
    for(let i = 1; i < 10; i++){
        totalSum += i;
    }
    const numbersSum = numbers.reduce((acc, cur) => acc + cur, 0);
    const answer = totalSum - numbersSum;
    return answer;
}