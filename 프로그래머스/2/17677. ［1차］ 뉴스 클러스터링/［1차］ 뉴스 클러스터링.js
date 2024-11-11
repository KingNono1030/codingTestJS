function solution(str1, str2) {
    const filterRegex = /[\d\s\W_]/;

    const lowercaseStr1 = str1.toLowerCase();
    const lowercaseStr2 = str2.toLowerCase();
        
    const str1Map = {};
    const str2Map = {};
    
    for(let i = 0; i < lowercaseStr1.length - 1; i++){
        const cluster = lowercaseStr1[i].concat(lowercaseStr1[i+1]);
        
        if(filterRegex.test(cluster)) continue;
            
        str1Map[cluster] = str1Map[cluster] ? str1Map[cluster] + 1 : 1;
    }
    
    for(let i = 0; i < lowercaseStr2.length - 1; i++){
        const cluster = lowercaseStr2[i].concat(lowercaseStr2[i+1]);
        if(filterRegex.test(cluster)) continue;

        str2Map[cluster] = str2Map[cluster] ? str2Map[cluster] + 1 : 1;            
    }
    
    let intersection = 0;
    let union = 0;
    
    for(const key of Object.keys(str1Map)){
        if(str2Map.hasOwnProperty(key)) continue;
        union += str1Map[key];    
    }
    // inter 는 중복 // union 은 다 합쳐
    for(const key of Object.keys(str2Map)){
        if(str1Map.hasOwnProperty(key)){
            union += Math.max(str1Map[key], str2Map[key]);
            intersection += Math.min(str1Map[key], str2Map[key]);
        } else {
            union += str2Map[key];
        }
    }
    if(union === 0) return 65536;
    return Math.floor(intersection / union * 65536);
}

// 자카드 유사도 J(A, B) = 교집합 / 합집합
// 집합 간의 유사도를 검사하는 여러 방법 중의 하나