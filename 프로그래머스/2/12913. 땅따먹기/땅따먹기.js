function solution(land) {
    
    const table = [...land];
    
    for(let i = 1; i < land.length; i++){
        table[i][0] += Math.max(table[i - 1][1], table[i - 1][2], table[i - 1][3]);
        table[i][1] += Math.max(table[i - 1][0], table[i - 1][2], table[i - 1][3]);
        table[i][2] += Math.max(table[i - 1][0], table[i - 1][1], table[i - 1][3]);
        table[i][3] += Math.max(table[i - 1][0], table[i - 1][1], table[i - 1][2]);
    }
    
    const answer = Math.max(...table[table.length - 1]);

    return answer;
}