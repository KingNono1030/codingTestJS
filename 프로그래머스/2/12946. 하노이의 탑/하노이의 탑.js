function solution(n) {
    if(n === 1) return [[1, 3]];
    const prior = solution(n - 1);
    const left = prior.map(item => {
        const newItem = [...item]
        let twoIndex;
        let threeIndex;
        for(let i in item){
            if(item[i] === 2){
                twoIndex = i
            } else if(item[i] === 3){
                threeIndex = i
            }
        }
        twoIndex && (newItem[twoIndex] = 3)
        threeIndex && (newItem[threeIndex] = 2)
        return newItem
    })
    const right = prior.map(item => {
        const newItem = [...item]
        let twoIndex;
        let oneIndex;
        for(let i in item){
            if(item[i] === 2){
                twoIndex = i
            } else if(item[i] === 1){
                oneIndex = i
            }
        }
        twoIndex && (newItem[twoIndex] = 1)
        oneIndex && (newItem[oneIndex] = 2)
        return newItem
    })    
    return [...left, [1, 3], ...right];
}
