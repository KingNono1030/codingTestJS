function solution(N, stages) {
    const failRate = [];
    
    for(let i = 1; i <= N; i++){
        const reached = stages.filter(item => item >= i).length;
        const notClear = stages.filter(item => item == i).length;
        failRate.push([i, notClear / reached]);
    }
    
    const answer = [...failRate].sort((a, b) => b[1] - a[1]).map(item => item[0]);
    return answer;
}