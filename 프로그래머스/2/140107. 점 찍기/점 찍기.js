function solution(k, d) {
    let count = 0;
    
    for(let x = 0; x <= d; x += k){
        const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2) / k) + 1;
        count += maxY;
    }
    return count;
}

// 반지름이 d인 원 안, 1사분면에 위치
// visited 에 문자열 채워
// 조건 해당할 때만, 추가
// (abscissa, ordinate) => (abscissa + k, ordinate) | (abscissa, ordinate + k)
// set.size