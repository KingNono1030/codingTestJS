function solution(participant, completion) {
    const obj = {};
    participant.forEach(item => {
        obj[item] >= 1 ? obj[item] += 1 : obj[item] = 1;
    })
    completion.forEach(item => {
        obj[item] --;
    })
    
    const failArr = Object.entries(obj).filter(item => item[1] >= 1).map(item => item[0]);
    const failedPlayer = failArr[0];
    return failedPlayer;
}