function solution(board) {
    let oCount = 0;
    let xCount = 0;
    
    for (let row of board) {
        for (let cell of row) {
            if (cell === 'O') oCount++;
            if (cell === 'X') xCount++;
        }
    }
    
    if (xCount > oCount || oCount > xCount + 1) return 0;

    const isWinner = (player) => {
        if (board.some(row => row === player.repeat(3))) return true;
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === player &&
                board[1][col] === player &&
                board[2][col] === player) return true;
        }
        if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
            (board[2][0] === player && board[1][1] === player && board[0][2] === player)) {
            return true;
        }
        return false;
    };

    const oWins = isWinner('O');
    const xWins = isWinner('X');

    if (oWins && xWins) return 0;
    if (oWins && oCount !== xCount + 1) return 0;
    if (xWins && oCount !== xCount) return 0;

    return 1;
}