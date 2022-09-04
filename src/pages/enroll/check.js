import ChenkIn from '../../utils/CheckIn'

export default function (userName, pwd, nickname, t_pwd) {
    const checkUserName = () => {
        const chenkIn = new ChenkIn();
        chenkIn.add({
            name: 'empty',
            params: [userName]
        })
        chenkIn.add({
            name: 'improperCommand',
            params: [userName, undefined],
        });

        
        return chenkIn;
    }
    const checkPwd = () => {
        const chenkIn = new ChenkIn();
        chenkIn.add({
            name: 'empty',
            params: [pwd]
        })
        chenkIn.add({
            name: 'improperCommand',
            params: [pwd, undefined],
        });
       
        chenkIn.add({
            name: 'maxLength',
            params: [pwd, undefined],
        })
        chenkIn.add({
            name: 'compare',
            params: [[pwd, t_pwd]]
        })

        return chenkIn;
    }
    const checkNickname = () => {
        const chenkIn = new ChenkIn();
        chenkIn.add({
            name: 'empty',
            params: [nickname]
        })
        chenkIn.add({
            name: 'improperCommand',
            params: [nickname, undefined],
        });
        chenkIn.add({
            name: 'maxLength',
            params: [nickname, undefined],
        })


        return chenkIn;
    }

    // 对应的类型对接相应的检验规则
    let checkQueue = [
        { msg: '账号', queue: checkUserName() },
        { msg: '密码', queue: checkPwd() },
        { msg: '昵称', queue: checkNickname() }
    ];


    // 获取结果
    for (let i = 0; i < checkQueue.length; i++) {
        const ele = checkQueue[i];
        const r = ele.queue.start();
        // 只要有其中一个检验不通过则返回false
        if (!r.state) {
            return {
                state: false,
                msg: ele.msg + r.msg
            }
        }

    }
    return {
        state: true
    }
}