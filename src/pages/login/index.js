import React, { useState } from 'react'
import styles from './index.css';
import From from '../../component/common/From'
import { connect } from 'dva'
import { dispatch, routerRedux } from 'dva'
import { message } from 'antd';
import ajax from '../../server/ajax'
import check from './check'
import { login } from '../../api'
function Login(props) {
    const [userName, setUserName] = useState('');
    const [pwd, setpwd] = useState('');
    const onLogin = async () => {
        const { state, msg } = check(userName, pwd); // 检验是否合法 格式是否满足条件 如何全部通过 返回true
        if (!state) {
            message.warning(msg);
            return;
        }
        const r = await login({
            userName,
            passWord: pwd
        })
        if (r.status === 'fail') {

            message.warning('账号或者密码错误');
        }
        else if (r.status === "success") {
            message.success('登录成功, 欢迎您');

            /**
                        * 把用户信息存入仓库
                        */

            props.onLogin(r.data.result, props)

        }
    }
    const onUserNameChange = newUserName => {
        setUserName(newUserName);
    }
    const onPwdChange = newPwd => {
        setpwd(newPwd);
    }


    return (
        <div className={styles['login']}>
            <div className="center">

                <From
                    onLogin={onLogin}
                    userName={userName}
                    pwd={pwd}
                    onUserNameChange={
                        onUserNameChange
                    }
                    onPwdChange={
                        onPwdChange
                    }
                    text={'登录'}
                    link={{
                        text: '注册',
                        path: '/enroll'
                    }}
                />
            </div>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({

    onLogin(userId, props) {
        dispatch({
            type: 'loginData/changeState',
            payload: userId
        })
        
        const path = props.location.state && props.location.state.path;
        dispatch(routerRedux.push(path != undefined ? path : '/'))
    }

})
const mapStateToProps = state => ({
    loginData: state.loginData
})
const result = connect(null, mapDispatchToProps)(Login);
result.title = '登录';
result.wrappers = ['@/router/ShowHeader', '@/router/LoginWrapper'];
export default result;
