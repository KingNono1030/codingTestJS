function solution(n, arr1, arr2) {
    const transformedArr1 = arr1.map(item => transformIntoBinary(n, item));
    const transformedArr2 = arr2.map(item => transformIntoBinary(n, item));
    const answer = transformedArr1.map((item, index) => {
        const sum = item + transformedArr2[index];
        const filledSum = sum.toString().padStart(n, '0');
        const answerRow = [...filledSum].reduce((acc, cur)=> {
            if(cur === '0') return acc + ' ';
            return acc + '#';
        }, '')
        return answerRow;
    });
    return answer;
}

function transformIntoBinary(n, decimal){
    const binary = Number(decimal.toString(2));
    return binary;
}