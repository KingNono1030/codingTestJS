function solution(s) {
    let answer = '';    
    const charRegex = /[a-zA-Z]/;
    const spaceRegex = /\s/;
    let hasMetFirstChar = false;
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(!hasMetFirstChar){
            hasMetFirstChar = true;
            charRegex.test(char) && (char = char.toUpperCase());
        } else if (hasMetFirstChar) {
            char = char.toLowerCase();            
        }
        spaceRegex.test(char) && (hasMetFirstChar = false);
        answer += char;
    }
    return answer;
}

// 첫 문자 -> 대문자
// 나머지 문자 -> 소문자
// 숫자 -> 변경 X
// 공백 -> 변경 X
