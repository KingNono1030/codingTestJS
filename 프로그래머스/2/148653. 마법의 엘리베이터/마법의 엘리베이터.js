function solution(storey) {
    // base case: 한 자리수일 때 올림을 고려하여 반환
    if (storey < 10) return Math.min(storey, 11 - storey); 

    // 현재 자리의 마지막 숫자 확인
    const lastDigit = storey % 10;
    
    // lastDigit이 5 이상일 때 올림/내림
    if (lastDigit > 5 || (lastDigit === 5 && Math.floor((storey / 10) % 10) >= 5)) {
        // 올림 적용한 경우
        return (10 - lastDigit) + solution((storey + 10 - lastDigit) / 10);
    } else {
        // 내림 적용한 경우
        return lastDigit + solution(Math.floor(storey / 10));
    }
}