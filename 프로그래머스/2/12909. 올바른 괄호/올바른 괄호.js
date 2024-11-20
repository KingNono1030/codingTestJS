function solution(s){    
    const left = '(';
    const right = ')';
    
    let leftCount = 0;
    let rightCount = 0;
    
    if(s[s.length - 1] === left) return false;
    for(const paren of s){
        if(paren === left){
            leftCount++;
        } else if(paren === right){
            rightCount++;
            if(leftCount - rightCount < 0) return false;
        }
    }
    
    return leftCount === rightCount;
}