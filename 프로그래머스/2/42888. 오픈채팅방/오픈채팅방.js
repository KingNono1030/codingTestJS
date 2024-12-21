function solution(record) {
    const idToNicknameMap = new Map();
    const result = [];
    
    record.forEach(item => {
        const [command, uid, name] = item.split(' ');
        switch(command){
            case 'Enter':
                idToNicknameMap[uid] = name;
                result.push(`${uid} 들어왔습니다.`);
                break;
            case 'Leave':
                result.push(`${uid} 나갔습니다.`);
                break;    
            case 'Change':
                idToNicknameMap[uid] = name;
                break;                
        }
    })
    
    return result.map(message => {
        const [uid, action] = message.split(' ');
        return `${idToNicknameMap[uid]}님이 ${action}`
    });
}


/**
const [command, uid, name] = item.split(' ')

idToNicknameMap - id - nickname

- Enter

idToNicknameMap[id] = nickname
printLog(id, in)

- Leave
printLog(id, out)

- Change
changeName(id, name)

*/