

function solution(friends, gifts) {
    const giftLog = {}
    const giftScore = {}
    const splittedGifts = gifts.map(item => item.split(' '))
    fillInitialGiftLog(friends, giftLog)
    friends.forEach(friend => getGSByOneFriend(friend, splittedGifts, giftScore))
    friends.reduce((acc, cur) => {
        if(friends.length <= 1) return
        const [target, ...otherFriends] = acc;
        compareGiftLog(target, otherFriends, gifts, giftLog, giftScore)
        return otherFriends
    }, friends)
    let answer = 0;
    for(let key in giftLog){
        if(answer <= giftLog[key]){answer = giftLog[key]}
    }
    return answer
}

function fillInitialGiftLog(friends, giftLog){
    friends.forEach(friend => giftLog[friend] = 0)
}

function getGSByOneFriend (friend, gifts, giftScore){
    let count = 0;
    gifts.forEach(item => {
        if(item[0] === friend){
            count ++
        } else if (item[1] === friend){
            count --
        }
    })
    giftScore[friend] = count
}

function compareGiftLog (target, otherFriends, gifts, giftLog, giftScore){
    otherFriends.forEach(item => compareOneToOne(target, item, gifts, giftLog, giftScore))
}

function compareOneToOne (target, otherFriend, gifts, giftLog, giftScore){
    let count = 0;
    gifts.forEach(item => {
        if(item === `${target} ${otherFriend}`){
            count ++;    
        } else if(item === `${otherFriend} ${target}`){
            count --
        }
    })
    count > 0 ? giftLog[target] ++ : count < 0 ? giftLog[otherFriend] ++ :
        giftScore[target] > giftScore[otherFriend] ? giftLog[target] ++ : giftScore[target] < giftScore[otherFriend] ? giftLog[otherFriend] ++ : 1
}