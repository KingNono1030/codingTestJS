function solution(n) {
    const MOD = 1234567;
    let a = 0; // F(0)
    let b = 1; // F(1)

    for (let i = 2; i <= n; i++) {
        const temp = (a + b) % MOD; // 현재 피보나치 수를 계산하고 모듈 연산
        a = b; // 이전 피보나치 수를 업데이트
        b = temp; // 현재 피보나치 수를 업데이트
    }

    return b; // n번째 피보나치 수 반환
}

// 테스트 예시
console.log(solution(3)); // 2
console.log(solution(5)); // 5
console.log(solution(100000)); // 큰 수 테스트