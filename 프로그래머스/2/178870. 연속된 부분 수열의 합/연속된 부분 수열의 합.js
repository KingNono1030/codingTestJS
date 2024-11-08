function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let sum = sequence[0];
    let answerSequence = null;
    
    while(end < sequence.length){
        if(sum < k){
            end++;
            if(end < sequence.length){
                sum += sequence[end];
            }
        } else {
            if(sum === k){
                if(!answerSequence || end - start < answerSequence[1] - answerSequence[0])
                answerSequence = [start, end];
            }
            sum -= sequence[start]
            start ++;
        }
    }
    return answerSequence;
    
}

// start end 포인터로 순회하는데
// 합이 k 보다 작으면 end 를 뒤로 밀고
// 크면 start 를 밀고
// 같으면 answerSequence 에 넣는데, 길이 비교해서 컷하거나 밀어내거나