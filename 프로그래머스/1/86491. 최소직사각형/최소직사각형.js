function solution(sizes) {
    const alignedSizes = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);
    const largestSize = alignedSizes.reduce((acc, cur) => {
        const LargeWidth = acc[0] > cur[0] ? acc[0] : cur[0];
        const LargeHeight = acc[1] > cur[1] ? acc[1] : cur[1];
        return [LargeWidth, LargeHeight];
    }, [0, 0])
    
    const [largestWidth, largestHeight] = largestSize;
    const largestArea = largestWidth * largestHeight;
    return largestArea;
}