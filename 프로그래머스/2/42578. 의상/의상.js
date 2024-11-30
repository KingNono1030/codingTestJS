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

// [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
// headgear 2 eyewear 1
// 안 입는 선택지 + 1
// headgear 3 eyewear 2
// 3 * 2 - 1 (모두 벗는 경우 제외)

// [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	
// face 3
// 4 - 1