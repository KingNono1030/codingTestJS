function solution(clothes) {
    const map = new Map();
    let answer = 1;
    clothes.forEach(item => {
        const key = item[1];
        if(map.has(key)){
            map.set(key, map.get(key) + 1)
        } else {
        map.set(key, 2);            
        }
    })
    for (let key of map.keys()) {
      answer *= map.get(key);
    }
    answer --;
    return answer;
}