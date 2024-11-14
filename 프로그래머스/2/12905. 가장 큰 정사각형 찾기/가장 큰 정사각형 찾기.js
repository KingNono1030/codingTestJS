function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    let maxSide = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 1) {
                if (i > 0 && j > 0) {
                    board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
                }
                maxSide = Math.max(maxSide, board[i][j]);
            }
        }
    }
    
    return maxSide * maxSide;
}