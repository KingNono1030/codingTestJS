function solution(n) {
    const target = n - 1;
    for(let i = 2; i <= target/2; i++){
        if(!(target % i)){
            return i;
        }
    }
    return target;
}