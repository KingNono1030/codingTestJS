function solution(order) {
    const orderMap = {};
    order.forEach((item, index) =>{
        orderMap[item] = index + 1;
    });
    
    const orderPositions = Object.values(orderMap);    
    
    const subStack = [];
    const answerArr = [0];
    
    orderPositions.forEach(item => {
        if(item !== answerArr[answerArr.length - 1] + 1){
            subStack.push(item);
        } else {
            answerArr.push(item);
            while(true){
                if(subStack[subStack.length - 1] === answerArr[answerArr.length - 1] + 1){
                    answerArr.push(subStack.pop());
                } else {
                    break;
                }
            }
        }
    })
    
    return answerArr.length - 1;
}

    
// 3 4 2 1 5