function solution(arr)
{
    var answer = [];
    const stack = [];
    arr.forEach(item => {
        if(!(stack.includes(item))){
            answer.push(item);
            stack.pop();
            stack.push(item);
        }
    })
    
    return answer;
}