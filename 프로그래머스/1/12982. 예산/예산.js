function solution(d, budget) {
    const sortedDepartment = d.sort((a, b) => a - b);
    let sum = 0;
    let count = 0;
    
    for(let i = 0; i < sortedDepartment.length; i++){
      sum += sortedDepartment[i];
      if(sum > budget){
            break;
        }
        count ++;
    }
    var answer = 0;
    return count;
}