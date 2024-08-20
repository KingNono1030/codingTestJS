function solution(n, words, order=1, turn = 1, memo={}, stack=[]) {
    if(words.length <= 0) return [0, 0];
    const remainingWords = [...words];
    const nextWord = remainingWords[0]
    if(Object.keys(memo).length === 0) {
        memo[nextWord] = true;
        remainingWords.shift();
        stack.push(nextWord)
        return solution(n, remainingWords, order+1, turn, memo, stack)
    }
    if(order > n){
        order %= n;
        turn += 1;
    }
    const priorWord = stack[0];
    if(priorWord[priorWord.length - 1] !== nextWord[0] || memo[nextWord]){
        return [order, turn]
    }
        memo[nextWord] = true;
        remainingWords.shift();
    stack.pop()
        stack.push(nextWord)
    return solution(n, remainingWords, order+1, turn, memo, stack)
}