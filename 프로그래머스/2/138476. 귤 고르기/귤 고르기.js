function solution(k, tangerine) {
    const tangerineMap = new Map();
    tangerine.forEach(item => {
        const num = tangerineMap.get(item);
        num ? tangerineMap.set(item, num + 1) : tangerineMap.set(item, 1);
    })
    const sortedTangerineCount = Array.from(tangerineMap, ([size, count]) => (count)).sort((a, b) => b - a);
    
    let answer = 0;
    let temp = k;
    
    for(let i in sortedTangerineCount){
        if(temp <= 0) break;
        temp -= sortedTangerineCount[i];
        answer ++;
    }
    
    return answer;
}