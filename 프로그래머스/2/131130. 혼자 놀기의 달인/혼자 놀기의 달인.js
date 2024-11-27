function solution(cards) {
    const boxCardMap = {};
    cards.forEach((item, index) => {
        boxCardMap[index + 1] = {
            num: item, 
            isOpen: false,
        }
    })
    
    const groupSizes = [];
    for (let i = 1; i <= cards.length; i++) {
        if (!boxCardMap[i].isOpen) {
            const groupSize = getGroupSize(boxCardMap, i);
            groupSizes.push(groupSize);
        }
    }
    if (groupSizes.length < 2) return 0; // 그룹이 2개 미만이면 점수는 0
    groupSizes.sort((a, b) => b - a); // 그룹 크기 내림차순 정렬
    return groupSizes[0] * groupSizes[1]; // 가장 큰 두 그룹 크기의 곱
}

function getGroupSize(boxCardMap, start) {
    let size = 0;
    let key = start.toString();
    while (true) {
        if (boxCardMap[key].isOpen === true) break; // 이미 열려있으면 종료
        boxCardMap[key].isOpen = true; // 상자 열기
        size++;
        key = boxCardMap[key].num.toString(); // 다음 상자 번호로 이동
    }
    return size;
}

// 1 ~ 100 카드
// 2 ~ 100 까지의 자연수, 작거나 같은 숫자 카드들로 카드 준비 -> 카드 수 만큼 상자 준비

// 상자에는 카드 한 장 씩 넣고, 상자를 무작위로 섞어 일렬로 나열. 나열된 순서대로 1, 2, 3, 4... 번호 부여

// 1번 상자부터 열기 시작합니다.
// 열려 있는 상자 안의 카드에 적힌 숫자를 보고, 그 숫자에 해당하는 상자 번호를 열어가며 계속 진행합니다.
// 이미 열려 있는 상자에 도달하면 종료되고, 이를 하나의 **“그룹”**으로 봅니다.
// 이렇게 만들어진 그룹의 상자들을 따로 분리합니다.

// 상자 열기:
// 상자 안의 카드에 적힌 숫자는 다음에 열 상자의 번호를 나타냅니다.
// 이미 열려 있는 상자에 도달하면 그룹 생성이 종료됩니다.

// 그룹의 점수:
// 첫 번째 그룹의 상자 수와 두 번째 그룹의 상자 수를 곱합니다.

// 최대 점수:
// 두 그룹의 조합 중, 점수가 가장 큰 값을 찾는 것이 목표입니다.