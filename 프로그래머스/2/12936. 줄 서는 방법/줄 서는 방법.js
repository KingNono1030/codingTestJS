function solution(n, k) {
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    let answer = [];
    let fact = facto(n - 1);
    k--;  // k를 0-based 인덱스로 맞추기 위해 감소

    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(k / fact);
        answer.push(numbers[index]);
        numbers.splice(index, 1);
        
        k %= fact;
        
        if (i > 0) fact /= i;
    }
    
    return answer;
}

function facto(n) {
    if (n <= 1) return 1;
    return n * facto(n - 1);
}