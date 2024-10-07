function solution(arr) {
    var answer = 0;
    const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
    return average;
}