function solution(n) {
    let result = 0;

    function isSafe(queens, row, col) {
        return queens.every(
            (queensCol, queensRow) =>
                queensCol !== col &&
                Math.abs(queensCol - col) !== Math.abs(queensRow - row)
        );
    }

    function placeQueen(queens = [], row = 0) {
        if (row === n) {
            result++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(queens, row, col)) {
                queens.push(col);
                placeQueen(queens, row + 1);
                queens.pop();
            }
        }
    }

    placeQueen();
    return result;
}