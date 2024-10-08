function solution(n) {
    var answer = 0;
    
    answer += n;
    
    for(let i = 1; i <= n / 2; i++){
        if(!(n % i)){
            answer += i;
        }
    }
    return answer;
}