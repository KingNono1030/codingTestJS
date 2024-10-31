
function solution(s)
{
    const regex = /(.)\1/;    
    if(!regex.test(s)) return 0;
    if(s.length === 0) return 1;
    
    return solution(s.replace(regex, ''));
}