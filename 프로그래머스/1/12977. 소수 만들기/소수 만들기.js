function solution(nums) {
    const sumMax = Math.max(...nums) * 3;
    const primeArr = getPrimeArr(sumMax);
    
    let count = 0;
    nums.forEach((first, firstIndex) => {
        const firstRest = nums.slice(firstIndex + 1);
        firstRest.forEach((second, secondIndex) => {
            const secondRest = firstRest.slice(secondIndex + 1);
            secondRest.forEach((third, thirdIndex) => {
                const sum = first + second + third;
                primeArr[sum] && count ++;
            })
        })
    })
    return count;
}

function getPrimeArr(n){
    const arr = new Array(n + 1).fill(true);
    arr[0] = false;
    arr[1] = false;
    for(let i = 2; i <= n; i++){
        if(!arr[i]){
            continue;
        }
        for(let j = i * 2; j <= n; j += i){
            arr[j] = false;
        }
    }
    return arr;
}