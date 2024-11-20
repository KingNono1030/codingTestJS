function solution(r1, r2) {
    let dotsOnQuadrant = 0;
    for(let i = 1; i <= r2; i++){
        const maxY = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
        if(i <= r1){
            const minY = Math.ceil(Math.sqrt(r1 ** 2 - i ** 2));
            dotsOnQuadrant += (maxY - minY + 1);            
        } else {
            dotsOnQuadrant += (maxY + 1);               
        }
    }
    return dotsOnQuadrant * 4;
}