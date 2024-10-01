function solution(array, height) {
    const tallerThanMusseok = [...array].filter(otherHeight => otherHeight > height);
    const numberOfTaller = tallerThanMusseok.length;
    return numberOfTaller;
}