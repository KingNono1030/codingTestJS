function solution(dirs) {
    // 변수
    const current = [0, 0];
    const visited = new Set();
    let count = 0;
    // 루프 dirs 순회하면서 좌표 이동
    for(let i = 0; i < dirs.length; i++){
        const command = dirs[i];
        const [currentX, currentY] = current;
        const prior = `${currentX},${currentY}`;
        switch(command){
            case 'L':
                if(current[0] > -5){
                    current[0] --;
                }
                break;
            case 'R':
                if(current[0] < 5){
                    current[0] ++;
                }
                break;
            case 'D':
                if(current[1] > -5){
                    current[1] --;
                }
                break;
            case 'U':
                if(current[1] < 5){
                    current[1] ++;
                }
                break;  
        }
        const [newX, newY] = current;
        if(!(currentX === newX && currentY === newY)){
            const next = `${newX},${newY}`;
            const moveRecord = `${prior}=>${next}`
            const reverseRecord = `${next}=>${prior}` // 움직인 경로 말고, 그 역도 set 에 추가
            if(!visited.has(moveRecord)){
                count ++;
                visited.add(moveRecord);
                visited.add(reverseRecord);                
            }
        }
    }
    return count;
    
    
}

// BFS 문제
// visited set
// 명령어대로 움직인 좌표가 !set.has(`0,0 => 0,1`) 라면 count ++
// 대신 경계를 넘어서는 명령어는 무시