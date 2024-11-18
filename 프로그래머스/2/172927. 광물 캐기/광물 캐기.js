const HPByPicksAndMinerals = {
    dia: {
        diamond: 1,
        iron: 1,
        stone: 1
    },
    iron: {
        diamond: 5,
        iron: 1,
        stone: 1
    },
    stone: {
        diamond: 25,
        iron: 5,
        stone: 1
    }
}

function solution(picks, minerals) {
    let [dia, iron, stone] = picks;
    let pickSum = dia + iron + stone;
    const possibleMinerals = Math.min(pickSum * 5, minerals.length);
    
    const worstPick = HPByPicksAndMinerals.stone;
    
    const sumArr = [];
    minerals.reduce((acc, cur, index) => {
        if(index >= possibleMinerals) return;
        let [sum, arr] = acc;
        sum += worstPick[cur];
        arr.push(cur);
        if(index % 5 === 4 || index === minerals.length - 1){
            sumArr.push([sum, arr]);
            return [0, []];
        }
        
        return [sum, arr];
    }, [0, []])
    
    sumArr.sort((a, b) => b[0] - a[0]);
    const answer = sumArr.reduce((acc, cur) => {
        const [_, arr] = cur;
        let consumedHP = 0;
        if(dia > 0){
            consumedHP = getConsumedHP('dia', arr);
            dia--;
        } else if(iron > 0){
            consumedHP = getConsumedHP('iron', arr);
            iron--;
        } else {
            consumedHP = getConsumedHP('stone', arr);
            stone--;
        }
        return acc + consumedHP;
    }, 0)
    
    return answer;
}

function getConsumedHP(pick, arr){
    const HPByMinerals = HPByPicksAndMinerals[pick];
    return arr.reduce((acc, cur) => acc + HPByMinerals[cur], 0);
}

// minerals 배열을 5개 단위로 분리
// ex) ["diamond", "diamond", "diamond", "iron", "iron"], ["diamond", "iron", "stone"]

// 광물 분류
// 1. 다3철2
// 2. 다1철1돌1

// 곡갱이별 피로도
// 1. 다 - 5 / 철 - 17 / 돌 - 135
// 2. 다 - 3 / 철 - 7 / 돌 - 31