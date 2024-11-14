function solution(board) {
    const maxRow = board.length - 1;
    const maxCol = board[0].length - 1;
    
    const points = {};
    const obstacles = new Set();
    
    // 보드의 시작 지점(R), 목표 지점(G), 장애물(D) 위치를 설정
    for (let row = 0; row <= maxRow; row++) {
        for (let col = 0; col <= maxCol; col++) {
            switch (board[row][col]) {
                case 'R':
                    points.start = [row, col];
                    break;
                case 'G':
                    points.end = [row, col];
                    break;
                case 'D':
                    obstacles.add(`${row},${col}`);
                    break;
            }
        }
    }
    
    const queue = [[points.start, 0]];  // 현재 위치와 이동 횟수 저장
    const visited = new Set([`${points.start[0]},${points.start[1]}`]);
    let front = 0;
    
    while (front < queue.length) {
        const [[row, col], count] = queue[front++];
        
        // 목표 지점 도달 시 이동 횟수 반환
        if (row === points.end[0] && col === points.end[1]) {
            return count;
        }
        
        // 각 방향으로 이동
        const directions = getPositionsBeforeObstacle([row, col], obstacles, maxRow, maxCol);
        for (const [newRow, newCol] of directions) {
            const positionKey = `${newRow},${newCol}`;
            if (!visited.has(positionKey)) {
                queue.push([[newRow, newCol], count + 1]);
                visited.add(positionKey);
            }
        }
    }
    
    return -1; // 목표 지점에 도달할 수 없는 경우
}

function getPositionsBeforeObstacle([row, col], obstacles, maxRow, maxCol) {
    const directions = [];
    
    // 왼쪽으로 이동
    let newCol = col - 1;
    while (newCol >= 0 && !obstacles.has(`${row},${newCol}`)) newCol--;
    directions.push([row, newCol + 1]);
    
    // 오른쪽으로 이동
    newCol = col + 1;
    while (newCol <= maxCol && !obstacles.has(`${row},${newCol}`)) newCol++;
    directions.push([row, newCol - 1]);
    
    // 위쪽으로 이동
    let newRow = row - 1;
    while (newRow >= 0 && !obstacles.has(`${newRow},${col}`)) newRow--;
    directions.push([newRow + 1, col]);
    
    // 아래쪽으로 이동
    newRow = row + 1;
    while (newRow <= maxRow && !obstacles.has(`${newRow},${col}`)) newRow++;
    directions.push([newRow - 1, col]);
    
    return directions;
}