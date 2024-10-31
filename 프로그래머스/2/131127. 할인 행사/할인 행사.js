function solution(want, number, discount) {
    var answer = 0;
    const dayCount = 10;
    
    const groceryNeedList = want.reduce((acc, item, index) => {
        acc[item] = number[index];
        return acc;
    }, {});
    
    const currentNeed = { ...groceryNeedList };

    for (let i = 0; i < dayCount; i++) {
        currentNeed[discount[i]] = (currentNeed[discount[i]] || 0) - 1;
    }
    
    if (isAllKeyZero(currentNeed)) answer++;

    
    for (let i = dayCount; i < discount.length; i++) {
        const addItem = discount[i];
        const removeItem = discount[i - dayCount];

        currentNeed[addItem] = (currentNeed[addItem] || 0) - 1;
        currentNeed[removeItem] = (currentNeed[removeItem] || 0) + 1;

        if (isAllKeyZero(currentNeed)) answer++;
    }

    return answer;
}

function isAllKeyZero(obj) {
    return Object.values(obj).every(value => value === 0);
}