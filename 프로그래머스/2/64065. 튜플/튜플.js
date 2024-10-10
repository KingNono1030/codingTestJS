function solution(s) {
    var answer = [];
    const transformedS = s.replaceAll('{', '[').replaceAll('}', ']');
    const array = JSON.parse(transformedS).sort((a, b) => a.length - b.length);
    return [...new Set(array.flat())];
}