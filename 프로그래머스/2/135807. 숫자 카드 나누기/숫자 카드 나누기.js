function solution(arrayA, arrayB) {
    const GCDA = gcdOfArray(arrayA);
    const GCDB = gcdOfArray(arrayB);
    
    const isGCDAPossible = arrayB.every(item => item % GCDA);
    const isGCDBPossible = arrayA.every(item => item % GCDB);
    if(isGCDAPossible && isGCDBPossible){
        return Math.max(GCDA, GCDB);
    } else if (isGCDAPossible) {
        return GCDA;
    } else if (isGCDBPossible) {
        return GCDB;   
    } else {
        return 0;
    }
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function gcdOfArray(arr) {
    return arr.reduce((acc, cur) => gcd(acc, cur));
}
