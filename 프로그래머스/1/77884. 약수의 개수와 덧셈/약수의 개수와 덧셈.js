const getNumOfDivisor = (target) => {
    let count = 1;
    for(let i = 1; i <= target/2; i++){
        if(target % i == 0){
            count ++;
        }
    }
    return count;
}

function solution(left, right) {
    const arr = Array.from(Array(right - left + 1)).map((_, index) => left + index);
    var answer = arr.reduce((acc, cur)=>{
        const sign = getNumOfDivisor(cur) % 2 ? -1 : 1;
        return acc + (cur * sign);
    },0);
    return answer;
}

