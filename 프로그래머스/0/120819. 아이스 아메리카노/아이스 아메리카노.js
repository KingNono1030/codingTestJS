function solution(money) {
    const americanoCost = 5500;
    const leftover = money % americanoCost;
    const americanoCount = (money - leftover) / americanoCost;

    return [americanoCount, leftover];
}