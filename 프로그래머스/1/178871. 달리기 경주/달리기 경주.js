function solution(players, callings) {
    
    const playersIndex = new Map();
    players.forEach((player, index ) => {
        playersIndex.set(player,index);
    });
    
    callings.forEach((player) => { 
        const index = playersIndex.get(player);
        const prevPlayer = players[index-1];
        
        [players[index-1], players[index]] = [players[index], players[index-1]];
        
        playersIndex.set(player, index-1);
        playersIndex.set(prevPlayer, index);
    })
    return players;
}

