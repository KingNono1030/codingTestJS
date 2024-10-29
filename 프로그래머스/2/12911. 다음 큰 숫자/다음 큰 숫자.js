function solution(n) {
    const binaryN = n.toString(2);
    const zeroBinaryN = binaryN.padStart(binaryN.length + 1, '0');
    
    const targetRegex = /01+0*$/;
    const targetSegment = zeroBinaryN.match(targetRegex)[0];
    const segmentLength = targetSegment.length;
    const oneCount = targetSegment.match(/1/g).length;
    const zeroCount = targetSegment.match(/0/g).length;
    
    const newSegment = '1'.concat('0'.repeat(zeroCount)).concat('1'.repeat(oneCount - 1));
    const newBinaryN = zeroBinaryN.replace(targetRegex, newSegment);
    const answer = parseInt(newBinaryN, 2);
    
    return answer;
}