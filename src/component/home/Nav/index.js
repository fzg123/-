import React from 'react'
import styles from './index.css'
import NavItem from './NavItem'
import x from '@/assets/min-img/img/1.png'
import c from '@/assets/min-img/img/2.png'
import d from '@/assets/min-img/img/3.png'
import m from '@/assets/min-img/img/4.png'
import j from '@/assets/min-img/img/5.png'
import ctx from '@/layouts/context'
import {withRouter} from 'umi'
function Nav(props) {
    return (
        <ctx.Consumer>
            {value => {
                return <ul className={styles.nav}>
                    <li>
                        <NavItem src={x} path='/noDevelopment' text={'限时抢购'} />
                    </li>
                    <li>
                        <NavItem src={c} path='/recharge' text={'充值有礼'} />
                    </li>
                    <li>
                        <NavItem src={d} path='/noDevelopment' text={'多人拼团'} />
                    </li>
                    <li>
                        <NavItem onClick={() => {
                            if (props.loginData === null) {
                                value.setFlagShowModal({
                                    title: '提示',
                                    children: '您还没有登录，是否跳转到登录页面',
                                    afterEnterCallback: () => {
                                        props.history.push('/login');
                                        value.setFlagShowModal(null);  // 同时关掉蒙层
                                    }
                                });
                            }
                            else {
                                value.setflagShowactivity(true);
                            }


                        }} src={m} path='/' text={'每日签到'} />
                    </li>
                    <li>
                        <NavItem src={j} path='/integralMall' text={'积分商城'} />
                    </li>
                </ul>
            }}
        </ctx.Consumer>

    )
}

export default withRouter(Nav);
