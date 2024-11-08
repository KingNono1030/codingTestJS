function solution(x, y, n) {    
    const queue = [[x, 0]];
    const visited = new Set([x]);
    
    let front = 0;
    
    while (front < queue.length) {
        const [current, count] = queue[front];
        front ++;
        
        if (current === y) return count;
        
        const operations = [current * 2, current * 3, current + n];
        
        for (const next of operations) {
            if (next <= y && !visited.has(next)) {
                visited.add(next);
                queue.push([next, count + 1]);
            }
        }
    }
    return -1;
}