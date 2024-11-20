function solution(s){   
    const leftParen = '(';
    const rightParen = ')';
    
    if(s[s.length - 1] === leftParen) return false;
    
    const stack =[];
    for(const paren of s){
        if(paren === leftParen){
            stack.push(paren);
        } else {
            const popped = stack.pop();
            if(popped === undefined) return false;
        }
    }
    
    return stack.length ? false : true;
}