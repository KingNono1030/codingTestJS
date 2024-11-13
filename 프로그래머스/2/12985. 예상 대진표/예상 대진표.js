function solution(n,a,b)
{
    const max = Math.log2(n);
    return max - recurse(n, a, b);
}

function recurse(n,a,b)
{   
    if(n === 2){
        return 0;
    }
    let isSameSide = false;
    let isRight = false;
    
    const middlePoint = (n / 2) + 0.5; // sameside or otherside
    if((a - middlePoint) * (b - middlePoint) < 0){
        isSameSide = true;;
    }
    if(isSameSide){
        return 0;
    }
    if((a-middlePoint) > 0){
        isRight = true;
    }
    if(isRight){
        return 1 + recurse(n/2, a-n/2, b-n/2);
    } else {
        return 1 + recurse(n/2, a, b)
    }
}