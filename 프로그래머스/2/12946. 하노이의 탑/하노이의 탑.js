function solution(n, from = 1, to = 3, via = 2) {
    // 종료 조건: 디스크가 하나일 때
    if (n === 1) return [[from, to]];
    
    // 1. n-1개의 디스크를 출발지에서 중간 기둥으로 옮긴다.
    const step1 = solution(n - 1, from, via, to);
    
    // 2. 가장 큰 디스크를 출발지에서 목적지로 옮긴다.
    const step2 = [[from, to]];
    
    // 3. n-1개의 디스크를 중간 기둥에서 목적지로 옮긴다.
    const step3 = solution(n - 1, via, to, from);
    
    // 모든 이동 과정을 합쳐 반환
    return [...step1, ...step2, ...step3];
}