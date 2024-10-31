function solution(elements) {
    
    const set = new Set();
    
    for(let i = 0; i < elements.length; i++){
        let sum = 0;
        for(let j = 0; j < elements.length; j++){
            const at = (i + j) % elements.length;
            sum += elements[at];
            set.add(sum);
        }
    }
    return set.size;
}