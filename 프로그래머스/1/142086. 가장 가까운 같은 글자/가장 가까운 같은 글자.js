function solution(s) {
    var answer = [];
    const map = new Map();
    [...s].forEach((item, index) => {
        if(!map.has(item)){
            map.set(item, index);
            answer.push(-1);
        } else {
            const priorIndex = map.get(item);
            const indexDiff = index - priorIndex;
            map.set(item, index);
            answer.push(indexDiff);
        }
    })
    return answer;
}