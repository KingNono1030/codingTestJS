function solution(hp) {
    const generalAtck = 5;
    const soldierAtck = 3;
    const normalAtck = 1;
    
    let leftHp = hp;
    var answer = 0;
    
    let generalNum = 0;
    let soldierNum = 0;
    let normalNum = 0;
    
    while(leftHp > 0){
        if(leftHp >= generalAtck){
            leftHp -= generalAtck;
            generalNum++;
        } else if (leftHp >= soldierAtck){
            leftHp -= soldierAtck;
            soldierNum++;
        } else {
            leftHp -= normalAtck;
            normalNum++;
        }
    }
    answer = generalNum + soldierNum + normalNum;
    return answer;
}