function solution(s) {
    const length = s.length;
    const arr = [...s];
    let count = 0;
    let i = 0
    while(i < length){
        const result = validateBracket(arr);
        if(result){ count++; }
        const left = arr.shift();
        arr.push(left);
        i++;
    }
    return count;
}

function validateBracket(arr){
    const mapping = { ')': '(', '}': '{', ']': '[' };
    const left = ['(', '{', '['];
    const right = [')', '}', ']'];    
    const stackS = [];
    const stackM = [];
    const stackL = [];    

    for(let i in arr){
        const item = arr[i];
        
        if(i >= 1 && right.includes(item)){
            if(left.includes(arr[i - 1]) && mapping[item] !== arr[i - 1]) return false;
        }
        switch(item){
            case '(':
                stackS.push(item);
                break;
            case '{':
                stackM.push(item);
                break;
            case '[':
                stackL.push(item);
                break;
            case ')':
                if(stackS.length === 0) return false;
                stackS.pop();
                break;
            case '}':
                if(stackM.length === 0) return false;
                stackM.pop();
                break;
            case ']':
                if(stackL.length === 0) return false;
                stackL.pop();
                break;
        }
    }

    if(stackS.length + stackM.length + stackL.length === 0) return true;
    return false;
}