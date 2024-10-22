function solution(answers) {
    const markA = [1, 2, 3, 4, 5]; // 5
    const markB = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]; // 16
    const markC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 20
    
    let [scoreA, scoreB, scoreC] = [0, 0, 0];
    
    answers.forEach((answer, index) => {
        answer === markA[index % markA.length] && scoreA++;
        answer === markB[index % markB.length] && scoreB++;
        answer === markC[index % markC.length] && scoreC++;
    })
    const scoreArr = [scoreA, scoreB, scoreC];
    const answer = [];
    const maxScore = Math.max(...scoreArr);
    scoreArr.forEach((item, index) => {
        const person = index + 1;
        item === maxScore && answer.push(person);
    })

    return answer;
}