const headRegex = /^\D+/
const numberRegex = /\d+/

function solution(files) {
    return files.sort(compareFile);
}

function compareFile(fileA, fileB){
    const [headA, headB] = [fileA, fileB].map(item => headRegex.exec(item)[0].toLowerCase());
    const [numberA, numberB] = [fileA, fileB].map(item => Number(numberRegex.exec(item)[0]));
    
    if(headA < headB){
        return -1;
    } else if (headA > headB){
        return 1;
    } else {
        if(numberA < numberB){
            return -1;
        } else if(numberA > numberB){
            return 1;
        } else {
            return 0;
        }
    }
}
