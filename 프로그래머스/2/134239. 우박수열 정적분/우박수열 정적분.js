function solution(k, ranges) {
    let count = 0;
    let num = k;
    const arr = [];
    
    while(true){
        arr.push(num);
        
        if(num === 1) break;
        
        (num % 2 === 0) ? (num /= 2) : (num = (num * 3) + 1);
        count ++;
    }
    
    const answer = [...ranges].map(range => {
        const start = range[0];
        const end = arr.length + range[1];
        if(start >= end) return -1;
        const slice = arr.slice(start, end);
        return getIntegral(slice);
    });
    
    return answer;
}

function getIntegral(arr){
    let sum = 0;
    
    for(let i = 0; i < arr.length - 1; i++){
        sum += (Math.abs(arr[i] - arr[i + 1]) / 2) + Math.min(arr[i], arr[i + 1])
    }
    
    return sum;
}