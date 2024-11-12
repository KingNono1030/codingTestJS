function solution(maps) {
    const resourcePoints = [];
    for(let row in maps){
        row = Number(row);
        for(let col in maps[row]){
            col = Number(col);
            if(maps[row][col] !== 'X'){
                resourcePoints.push([row, col]);
            }
        }
    }
    if(resourcePoints.length === 0) return [-1];
    var answer = [];
    
    const resourceSums = [];
    
    const visited = new Set();
    
    for(const point of resourcePoints){
        if(visited.has(`${point[0]},${point[1]}`)) continue;
        let foodCount = 0;
        const queue = [point];
        let front = 0;
        visited.add(`${point[0]},${point[1]}`);
        let initialCount = Number(maps[point[0]][point[1]]);
        while(front < queue.length){
            const current = queue[front];
            front ++;

            const paths = [
                [current[0] - 1, current[1]],
                [current[0] + 1, current[1]],
                [current[0], current[1] - 1],
                [current[0], current[1] + 1],
            ];
            for(const path of paths){
                const isSafePath = 
                    0 <= path[0] && path[0] < maps.length && 
                    0 <= path[1] && path[1] < maps[0].length && 
                    maps[path[0]][path[1]] !== 'X';

                if (isSafePath && !visited.has(`${path[0]},${path[1]}`)) {
                    initialCount += Number(maps[path[0]][path[1]]);
                    visited.add(`${path[0]},${path[1]}`);
                    queue.push(path);
                }
            }
        }   
        resourceSums.push(initialCount);
    }

    return resourceSums.sort((a, b) => a - b);
}

/**

X591X
X1X5X
X231X
1XXX1

**/