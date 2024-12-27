function solution(m, n, board) {
    let count = 0;
    
    const newBoard = board.map(row => row.split(''));
    
    // 루프 돌면서 조건 맞는 네모 탐색
    const findBlocksToRemove = () => {
        const coordinates = new Set();

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = newBoard[i][j];
                if (block !== '.' &&
                    block === newBoard[i + 1][j] &&
                    block === newBoard[i][j + 1] &&
                    block === newBoard[i + 1][j + 1]) {
                    
                    coordinates.add(`${i},${j}`);
                    coordinates.add(`${i},${j + 1}`);
                    coordinates.add(`${i + 1},${j}`);
                    coordinates.add(`${i + 1},${j + 1}`);
                }
            }
        }
        return coordinates;
    };

    // 중력
    const applyGravity = () => {
        for (let col = 0; col < n; col++) {
            const stack = [];
            for (let row = 0; row < m; row++) {
                if (newBoard[row][col] !== '.') {
                    stack.push(newBoard[row][col]);
                }
            }
            for (let row = m - 1; row >= 0; row--) {
                newBoard[row][col] = stack.length > 0 ? stack.pop() : '.';
            }
        }
    };
    
    // 루프
    while(true){
        const blocksToRemove = findBlocksToRemove();
        
        if(blocksToRemove.size === 0) break;
        
        blocksToRemove.forEach(item => {
            const [row, col] = item.split(',').map(Number);
            newBoard[row][col] = '.';
        })
        
        applyGravity();
        
        count += blocksToRemove.size;
    }

    return count;
}



/**
R M A F N T J C

루프 (조건 검사 + 재배열)
(
4개 블록 -> 펑
겹쳐도 펑

펑 -> 위 블록 와르르 (row 증가)

)

[
"CCBDE", 
"AAADE", 
"AAABF", 
"CCBBF"
]

[
"TTTANT", 
"RRFACC", 
"RRRFCC", 
"TRRRAA", 
"TTMMMF", 
"TMMTTJ"
]

[
["T","T","T","A","N","T"],
[".",".","F","A",".","."],
[".",".",".","F",".","."],
["T",".",".","R","A","A"],
["T","T","M","M","M","F"],
["T","M","M","T","T","J"]
]

*/