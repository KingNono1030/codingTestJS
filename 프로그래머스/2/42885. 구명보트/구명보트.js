function solution(people, limit) {
    let sorted = people.sort((a, b) => a - b);
    let i = 0;
    let j = sorted.length - 1;
    let boats = 0;
    
    while (i <= j) {
        boats++;
        if (sorted[i] + sorted[j] <= limit) {
            i++;
        }
        j--;
    }
    
    return boats;
}