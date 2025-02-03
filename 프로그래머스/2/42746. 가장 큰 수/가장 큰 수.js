function solution(numbers) {
    // numbers를 문자열로 변환하여 정렬합니다.
    const sortedNumbers = numbers
        .map(String)  // 숫자 배열을 문자열 배열로 변환
        .sort((a, b) => (b + a) - (a + b));  // 두 문자열을 이어 붙였을 때 더 큰 것이 앞에 오도록 정렬

    // 정렬된 배열을 이어붙여 하나의 문자열을 만듭니다.
    const result = sortedNumbers.join('');
    
    // 결과가 '0'만 있을 경우 '0'을 반환, 그 외에는 계산된 값 반환
    return result[0] === '0' ? '0' : result;
}
