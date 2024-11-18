function solution(plans) {
    const nameTimeMap = new Map();
    
    const newPlans = plans.map(([name, start, playtime]) => {
        const playtimeNum = Number(playtime);
        nameTimeMap.set(name, playtimeNum);
        
        return [name, getTimeStampNum(start), playtimeNum]
    }).sort((a, b) => a[1] - b[1]);
    
    const homeworkStack = [];
    const answerArr = [];
    
    for(let i = 0; i < newPlans.length - 1; i++){
        const [name, start, playtime] = newPlans[i];
        let givenTime = newPlans[i + 1][1] - start; // 다음 과제 까지 주어진 시간
        // 주어진 시간 vs playtime
        // 주어진 시간이 많으면, 스택에서 바깥쪽에 있는 것부터 해결, 주어진 시간이 0 or 스택이 빌 때 까지 반복
        // 주어진 시간이 적으면, 일단 주어진 시간 만큼 빼고 스택에 추가
        if(givenTime < playtime){
            nameTimeMap.set(name, playtime - givenTime);
            homeworkStack.push(name);
        } else {
            givenTime -= playtime;
            nameTimeMap.set(name, 0);
            answerArr.push(name);
            while(homeworkStack.length > 0 && givenTime > 0){
                const homework = homeworkStack[homeworkStack.length - 1];
                const stackPlaytime = nameTimeMap.get(homework);
                if(givenTime < stackPlaytime){
                    nameTimeMap.set(homework, stackPlaytime - givenTime);
                    givenTime = 0;
                } else {
                    answerArr.push(homework);
                    homeworkStack.pop();
                    nameTimeMap.set(homework, 0);
                    givenTime -= stackPlaytime;
                }
            }
        }
    }
    
    return answerArr.concat(newPlans[newPlans.length - 1][0]).concat(homeworkStack.reverse());
}

function getTimeStampNum(str){
    const timeStamp = str.split(':');
    const hour = translateTwoDigitStringToNum(timeStamp[0]);
    const minute = translateTwoDigitStringToNum(timeStamp[1]);
    return hour * 60 + minute;
}

function translateTwoDigitStringToNum(str){
    return Number(str[0]) * 10 + Number(str[1]);
}