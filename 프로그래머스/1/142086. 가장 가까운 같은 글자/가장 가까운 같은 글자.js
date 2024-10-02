function solution(s) {
    let answer = [...s];
    let setArr = [...new Set([...s])];
    setArr.forEach((item) => {
        let first = s.indexOf(item);
      answer = answer.map((itemInside, index)=>{
          if(itemInside === item){
              if(index === first){
                  return -1;
              }
              return index - getLatest([...s], item, index);
          }
          return itemInside;
          // banana
      }
          
      )  
    })
    
    return answer;
}

function getLatest(arr, item, index){
    // [b,a,n,a,n,a]
    let indexArr = [];
    arr.forEach((itemInside, indexInside) => {
        if(item === itemInside){
            indexArr.push(indexInside);
        }
    })
    return Math.max(...indexArr.filter(item => item < index));
}