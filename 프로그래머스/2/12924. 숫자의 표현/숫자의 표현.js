function solution(n) {
    let count = 1;
    for(let i = 2; i < n; i ++){
        const triangularNumber = getTriangularNumber(i);
        if(n - triangularNumber < 0) break;
        ((n - triangularNumber) % i == 0) && (count ++);
    }
    var answer = 0;
    return count;
}

function getTriangularNumber(k){
    return k * (k + 1) / 2;
}