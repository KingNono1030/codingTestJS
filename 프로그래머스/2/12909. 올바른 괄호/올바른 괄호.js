function solution(s){
    const left = '(';
    const right = ')';
    
    if(s[0] === right || s[s.length - 1] === left) return false;
    
    const stack = [];
    for(let paren of s){
        if(paren === left){
            stack.push(paren);
        } else {
            if(stack[stack.length - 1] === right) return false;
            stack.pop();
        }
    }
    return stack.length === 0 ? true : false;

}