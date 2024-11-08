function solution(n) {
    const fibo = [];
    fibo[0] = 1;
    fibo[1] = 1;
    for(let i = 2; i <= n; i++){
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1000000007;
    }
 
    return fibo[n];
}