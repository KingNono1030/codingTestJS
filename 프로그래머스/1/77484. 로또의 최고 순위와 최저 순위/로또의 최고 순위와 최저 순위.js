const matchMap = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1
}

function solution(lottos, win_nums) {
    const lottoMap = {};
    lottos.forEach(item => {
        if(lottoMap[item]){
            lottoMap[item]++;
            return;
        }
        lottoMap[item] = 1;
    });
    
    win_nums.forEach((item) => {
        if(lottoMap[item]){
            lottoMap[item]--;
            return;
        }        
    })
    
    const leastMatch = Object.values(lottoMap).filter(item => item === 0).length;
    const possibleMatch = lottoMap[0] || 0;
    const matchArr = [leastMatch + possibleMatch, leastMatch];
    const answer = matchArr.map(item => matchMap[item]);
    
    return answer;
}