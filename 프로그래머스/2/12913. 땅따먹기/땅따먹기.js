function solution(land) {
    const dpTable = land;
    
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < 4; j++){
            const priorTable = [];
            for(let k = 0; k < 4; k++){
                if(k === j) continue;
                priorTable.push(dpTable[i-1][k]);
            }
            dpTable[i][j] = Math.max(...priorTable) + land[i][j];
        }
    }
    
    const answer = Math.max(...dpTable[land.length - 1]);

    return answer;
}