function solution(n) {
    if(n === 0) return '';
    let quotient = Math.floor(n / 3);
    let remainder = n % 3;
    
    if(remainder === 0){
        remainder = '4';
        quotient --;
    }
    
    return solution(quotient) + remainder;
}

// 0 % 3 . 0, 0
// 1 % 3 . 0, 1
// 2 % 3 . 0, 2

// 3 % 3 . 1, 0
// 4 % 3 . 1, 1
// 5 % 3 . 1, 2

// 6 % 3 . 2, 0
// 7 % 3 . 2, 1
// 8 % 3 . 2, 2

// 9 % 3 . 3, 0
// 10 % 3 . 3, 1
// 11 % 3 . 3, 2

// 12 % 3 . 4, 0
