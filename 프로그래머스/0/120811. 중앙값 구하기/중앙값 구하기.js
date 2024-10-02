function solution(array) {
    if(array.length % 2){
        const middleIndex = Math.floor(array.length / 2);
        const sortedArray = [...array].sort((a, b) => a - b);
        const median = sortedArray[middleIndex];
        return median;        
    }
}
