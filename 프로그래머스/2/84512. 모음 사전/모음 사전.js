function solution(word) {
    const wordGroup = [ 'A', 'E', 'I', 'O', 'U' ];
    const weights = [781, 156, 31, 6, 1];
    
    let answer = 0;
    
    for(let i = 0; i < word.length; i ++){
        const index = wordGroup.indexOf(word[i]);
        answer += index * weights[i] + 1;
    }
    return answer;
}
// X/6

// A....
// AA...
// AAA.. 3 ~ 26
// AAAA. 4 ~ 9 (5)
// AAAAA 

// AAAAE 6
// AAAAI 7
// AAAAO 8
// AAAAU 9

// AAAE. 10
// AAAEA 11
// AAAEE 12
// AAAEI 13
// AAAEO 14
// AAAEU 15

// AAAI() 16 ~ 21
// AAAO() 21 ~ 25
// AAAU() 26 ~ 31

// AAEAA ~ AAEUU 29 ~ 52
// AAIAA ~ AAIUU 52 ~ 75
// AAOAA ~ AAOUU 75 ~ 98
// AAUAA ~ AAUUU 98 ~ 121

// 
