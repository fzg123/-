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

        chenkIn.add({
            name: 'form',
            params: [userName]
        })
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
            name: 'minLength',
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
            name: 'minLength',
            params: [nickname, undefined],
        });
        chenkIn.add({
            name: 'maxLength',
            params: [nickname, undefined],
        })


        return chenkIn;
    }
    let checkQueue = [
        { msg: '账号', queue: checkUserName() },
        { msg: '密码', queue: checkPwd() },
        { msg: '昵称', queue: checkNickname() }
    ];



    for (let i = 0; i < checkQueue.length; i++) {
        const ele = checkQueue[i];
        const r = ele.queue.start();
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