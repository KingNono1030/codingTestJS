function solution(elements) {
    const memo = {};
    const length = elements.length;
    for(let i = 0; i < length; i++){
        let value = elements[i]
        memo[value] = true
        for(let j = 1; j < length - 1; j++){
            value += elements[getRemainder(length, i + j)];
            memo[value] = true;
        }
    }
    const answer = Object.keys(memo).length;
    return answer + 1;
}

function getRemainder(length, i){
    return i % length
}