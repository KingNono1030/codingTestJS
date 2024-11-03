function solution(n) {
    let count = 1;
    let triangularNumber = 1;

    for (let i = 2; triangularNumber < n; i++) {
        triangularNumber += i;
        if ((n - triangularNumber) < 0) break;
        if ((n - triangularNumber) % i === 0) count++;
    }
    
    return count;
}