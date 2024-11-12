function solution(maps) {
    const positions = {};
    
    for (let row in maps) {
        for (let col in maps[row]) {
            row = Number(row);
            col = Number(col);
            switch (maps[row][col]) {
                case 'S':
                    positions.start = [row, col];
                    break;
                case 'L':
                    positions.lever = [row, col];
                    break;
                case 'E':
                    positions.exit = [row, col];
                    break;
            }
        }
    }
    
    const bfs = (start, target) => {
        const queue = [[start, 0]];
        const visited = new Set([`${start[0]},${start[1]}`]);
        let front = 0;
        
        while (front < queue.length) {
            const [current, count] = queue[front];
            front++;
            
            if (current[0] === target[0] && current[1] === target[1]) {
                return count;
            }
            
            const paths = [
                [current[0] - 1, current[1]],
                [current[0] + 1, current[1]],
                [current[0], current[1] - 1],
                [current[0], current[1] + 1]
            ];
            
            for (const path of paths) {
                const isSafePath = 
                    0 <= path[0] && path[0] < maps.length && 
                    0 <= path[1] && path[1] < maps[0].length && 
                    maps[path[0]][path[1]] !== 'X';
                
                if (isSafePath && !visited.has(`${path[0]},${path[1]}`)) {
                    visited.add(`${path[0]},${path[1]}`);
                    queue.push([path, count + 1]);
                }
            }
        }
        
        return -1;
    };
    
    const leverCount = bfs(positions.start, positions.lever);
    if (leverCount === -1) return -1;
    
    const exitCount = bfs(positions.lever, positions.exit);
    if (exitCount === -1) return -1;
    
    return leverCount + exitCount;
}