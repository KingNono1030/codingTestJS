function solution(n, memo={}) {
    if(n <= 1) return 1
    if(memo[n])return memo[n]

    memo[n] = (solution(n - 1, memo) + solution(n - 2, memo)) % 1234567;
    return memo[n]
}