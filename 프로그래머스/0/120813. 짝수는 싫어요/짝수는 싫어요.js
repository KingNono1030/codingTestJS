function solution(n) {
    let arr = [];
    const loopCount = Math.ceil(n / 2);
    for(let i = 1; i <= loopCount; i++){
        arr.push(2 * i - 1);
    }
    return arr;
}