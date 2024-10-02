function solution(s) {
    var answer = [];
    const obj = {};
    [...s].forEach((item, index) => {
        if(!obj.hasOwnProperty(item)){
            obj[item] = index;
            answer.push(-1);
        } else {
            const priorIndex = obj[item];
            const indexDiff = index - priorIndex;
            obj[item] = index;
            answer.push(indexDiff);
        }
    })
    return answer;
}