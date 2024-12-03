function solution(msg) {
    // 사전 정의. A => 1 ~ Z => 26. dicIndex === 27
    const START_CHAR_CODE = 64;
    let dicIndex = 1;
    const dictionaryMap = new Map();
    while(dicIndex <= 26){
        dictionaryMap.set(String.fromCharCode(START_CHAR_CODE + dicIndex), dicIndex);
        dicIndex++;
    }
    
    // 자료 정의 (출력값, 입력값)
    const print = [];
    let input = '';
    let newWord = ''
    
    // loop
    for(let i = 0; i < msg.length; i++){
        input += msg[i];
        while(dictionaryMap.has(input)){
            i++;
            input += msg[i];
        }
        i--;
        dictionaryMap.set(input, dicIndex);
        dicIndex++;
        input = input.substring(0, input.length - 1).replace('undefine', '');
        print.push(dictionaryMap.get(input));
        input = '';
    }
    return print;
}

// A65 - Z90

// 입력은 사전에 있는 내용만 입력 가능
// 입력 값 (루프로 사전에 등재되지 않은 조합을 발견하기 전까지 다음 문자를 더한 값) + 다음 문자는 사전에 추가 등재

// ABABABABABABABAB 16
// A / B / AB / ABA / BA / BAB / ABAB
// 1 / 2 / 27 / 29 / 28 / 31 / 30
// A B AB27 BA28 ABA29 ABAB30 / BAB31 / BABA32 / ABABA33

// 사전: { A => 1, B => 2 ... } 맵, has 로 입력값 + 다음 문자의 사전 등재 여부
// 사전 등재 Y
// 입력값(문자열)에 다음 문자 더해서 다시 시도
// 사전 등재 N
// 입력값에는 변화 안 주고, 입력값 + 다음 문자를 사전에 새로 등재
// 입력값 초기화, 입력값을 key 로 value 출력
// 입력값