function solution(nums) {
    const maxChoice = nums.length / 2;
    const deduplicatedArr = [...new Set(nums)];
    const possibleDiverse = deduplicatedArr.length;
    var answer = Math.min(maxChoice, possibleDiverse);
    return answer;
}