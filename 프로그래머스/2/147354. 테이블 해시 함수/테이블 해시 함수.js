function solution(data, col, row_begin, row_end) {
    const sorted = [...data].sort((a, b) => {
        const diff = a[col - 1] - b[col - 1];
        if(diff < 0){
            return -1;
        } else if (diff > 0){
            return 1;
        } else {
            if(a[0] - b[0] > 0) return -1;
            if(a[0] - b[0] < 0) return 1;
            return 0;
        }
    });
    
    let answer = 0;
    let temp = row_begin;
    let beginIndex = row_begin - 1;
    const endIndex = row_end - 1;
    
    const slicedArr = sorted.slice(beginIndex, endIndex + 1);
    
    return slicedArr.reduce((acc, cur) => {
        const sum = getS_i(cur, temp);
        temp ++;
        return acc ^ sum;
    }, 0);
}

function getS_i(arr, n){
    return arr.reduce((acc, cur) => acc + cur % n, 0)
}