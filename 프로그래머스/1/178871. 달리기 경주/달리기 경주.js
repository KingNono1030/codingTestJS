function solution(players, callings) {
    const copiedPlayers = [...players];
    const oderMap = new Map();
    const playerMap = new Map();
    players.forEach((player, index) => {
        oderMap.set(player, index);
        playerMap.set(index, player);        
    });
    
    callings.forEach(call => {
        const targetIndex = oderMap.get(call);
        const chasedIndex = targetIndex - 1;
        
        const chasedPlayer = playerMap.get(chasedIndex);
        
        oderMap.set(chasedPlayer, targetIndex);
        oderMap.set(call, chasedIndex);
        
        playerMap.set(targetIndex, chasedPlayer);
        playerMap.set(chasedIndex, call);
    });
    var answer = [];
    for (const key of playerMap.keys()) {
        answer.push(playerMap.get(key));
    }
    return answer;
}