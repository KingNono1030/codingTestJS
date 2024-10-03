function solution(want, number, discount) {
    var answer = 0;
    const dayCount = 10;
    const groceryNeedList = new groceryNeedListGenerator(want, number);
    const stack = [];
    const endpointStack = [];
    discount.forEach((item, index) => {
        stack.push(item);
        groceryNeedList[item] --;

        if(index >= 9){
            if(index > 9) {
                stack.shift();
                const firstItemInStack = endpointStack[0];
                groceryNeedList[firstItemInStack] ++;
                endpointStack.pop();                
            }
            endpointStack.push(stack[0]);
            isAllKeyZero(groceryNeedList) && answer ++;
        }
    });
    return answer;
}

class groceryNeedListGenerator {
    constructor(want, number){
        want.forEach((item, index) => {
            this[item] = number[index];
        })
    }
}

const isAllKeyZero = (obj) => {
    for (let item in Object.keys(obj)){
        if(obj[Object.keys(obj)[item]]){
            return false;
        }
    }
    return true;
}