function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];
    
    for(let i = 0; i < prices.length; i++){
        while(stack.length && prices[stack[stack.length - 1]] > prices[i]){
            const index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i);
    }
    
    while(stack.length){
        const index = stack.pop();
        answer[index] = prices.length - 1 - index;
    }
    
    return answer;
}

/**
function solution(prices) {
    return prices.map((price, i) => {
        let next = prices.findIndex((item, index) => (item < price) && index > i) ;
        (next === -1) && (next = prices.length - 1)
        return next - i;
    });
}

1
[0]

2
[0, 1]

*/