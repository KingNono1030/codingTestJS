function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = [];
    
    for(let i = 0; i < numbers.length; i++){
        
        while(stack.length && numbers[stack[stack.length - 1]] < numbers[i]){
            const index = stack.pop();
            answer[index] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}

/**
    const answer = numbers.map((num, i) => {
        const next = numbers.slice(i).find(item => item > num) || -1;
        return next;
    
    })
    return answer;

- 기존 풀이 문제: O(N2) -> 타임아웃
- O(N) 목표로 해야할 듯 (배열 1회 순회)

[9, 1, 5, 3, 6, 2]	
[-1, -1, -1, -1, -1, -1]	
[] 스택: 더 큰 값을 찾지 못한 인덱스 저장 (push, pop)

9
[0]

1
[0, 1]

5
[0, 2]

3
[0, 2, 3]

6
[0]
*/