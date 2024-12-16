function solution(skill, skill_trees) {
    let possibleOrder = '';
    const set = new Set([possibleOrder]);

    for(let s of skill){
        possibleOrder += s;
        set.add(possibleOrder);
    }
    const regex = RegExp(`[^${skill}]`, 'ig');
    return skill_trees.map(item => item.replace(regex, '')).filter(item => set.has(item)).length;
}

/**
스킬 트리 순서대로 찍어야 함
(중복이 없음)
근데, 스킬 트리랑 상관 없는 스킬도 섞여 있음

1) 스킬트리 관련된 문자만 날리고 지우기
2) CBD 의 부분 문자열로 표현되는 문자열('' 포함)이 반환되어야 함
2-1) 부분 문자열이 아니라, 순서가 보장이 되어야 함.
C 없는 B 는 없고, B 없는 D 는 없음

skill 로 만들 수 있는 모든 경우의 수 배열?
['', 'C', 'CB', 'CBD']

예시)
skill: CBD
skill_tree: AECB -> CB

const regex = /[CBD]/g

*/