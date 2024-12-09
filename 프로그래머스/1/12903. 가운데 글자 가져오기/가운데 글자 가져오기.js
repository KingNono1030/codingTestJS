function solution(s) {
    let sArr = s.split('');
    let answer = sArr.length % 2 ? sArr[(sArr.length - 1)/2] : sArr[sArr.length/2 - 1].concat(sArr[sArr.length/2]);
    
    return answer;
}