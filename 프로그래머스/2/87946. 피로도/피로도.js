function solution(k, dungeons, count = 0) {
    let maxCount = count;

    dungeons.forEach((chosen, index) => {
        const rest = dungeons.slice(0, index).concat(dungeons.slice(index + 1));

        if (chosen[0] <= k) {
            maxCount = Math.max(maxCount, solution(k - chosen[1], rest, count + 1));
        }
    });

    return maxCount;
}