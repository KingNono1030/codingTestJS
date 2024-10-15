function solution(price, money, count) {
    const costArr = Array.from(Array(count)).map((_, index) => price * (index + 1));
    const costSum = costArr.reduce((acc, cur) => acc + cur, 0);
    const debt = costSum - money;
    
    return debt > 0 ? debt : 0;
}