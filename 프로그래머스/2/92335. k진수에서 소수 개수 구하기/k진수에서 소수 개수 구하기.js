function solution(n, k) {
    // n을 k진수로 변환 후, 0을 기준으로 나눈 숫자 배열 생성
    const candidates = n.toString(k).split('0').map(Number).filter(Boolean);

    // 소수 개수 세기
    return candidates.filter(isPrime).length;
}

// 소수 판별 함수
function isPrime(num) {
    if (num < 2) return false; // 0과 1은 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // 약수가 존재하면 소수가 아님
    }
    return true; // 소수
}