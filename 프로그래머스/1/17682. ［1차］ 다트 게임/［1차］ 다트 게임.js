const bonusMap = {
    S: 1,
    D: 2,
    T: 3,
}

function solution(dartResult) {
    const dartRegex = /\d0?[SDT][*#]?/g
    const scoreRegex = /\d0?/
    const bonusRegex = /[SDT]/
    const optionRegex = /[*#]?$/
    
    const answerArr = [];
    
    const dartArr = dartResult.match(dartRegex);
    dartArr.forEach((item, index, original) => {
        const score = Number(item.match(scoreRegex)[0]);
        const bonus = bonusMap[item.match(bonusRegex)[0]];
        const bonusApplied = score ** bonus;
        
        let finalScore = bonusApplied;
        const option = item.match(optionRegex)[0];
        switch(option){
            case '*':
                finalScore *= 2;
                index > 0 && (answerArr[index - 1] *= 2);
                break;
            case '#':
                finalScore *= -1;
                break;
        }
        answerArr.push(finalScore);
    })
    const answer = answerArr.reduce((acc, cur) => acc + cur, 0);
    return answer;
}