import React from 'react'
import styles from './index.css'
import OperateOption from '../../component/common/OperateOption'
import UserData from '../../component/mine/UserData'
import OutLogin from '../../component/mine/containers/OutLogin'
import { connect } from 'dva'
import NotLoingShow from '../../component/mine/NotLoginShow'
import zf from '@/assets/min-img/img/27.png'
import zt from '@/assets/min-img/img/26.png'
import tk from '@/assets/min-img/img/25.png'
import jifen from '@/assets/min-img/img/24.png'

import js from '@/assets/min-img/img/34.png'
import yh from '@/assets/min-img/img/33.png'
import hb from '@/assets/min-img/img/32.png'
import pj from '@/assets/min-img/img/31.png'


function Mine(props) {

    const obj = {
        iconAndText: [
            {
                icon: zf,
                text: '待支付',
                path: '/myOrder/waitPay'
            },
            {
                icon: zt,
                text: '代自提',
                path: '/noDevelopment'
            },
            {
                icon: tk,
                text: '已退款',
                path: '/myOrder/alreadyRefund'
            }, {
                icon: jifen,
                text: '积分订单',
                path: '/noDevelopment'
            }
        ],
        totalText: '我的订单',
        link: {
            text: '查看全部订单>',
            path: '/myOrder'
        }
    }
    const obj1 = {
        iconAndText: [
            {
                icon: js,
                text: '积分商城',
                path: '/integralMall'
            },
            {
                icon: yh,
                text: '优惠卷中心',
                path: '/myBoon'
            },
            {
                icon: hb,
                text: '我的红包',
                path: '/myRedPacket'
            }, {
                icon: pj,
                text: '我的评价',
                path: '/noDevelopment'
            }
        ],
        totalText: '我的服务',

    }
    return (

        <div className={styles['mine']}>


            {props.loginData === null ? <NotLoingShow /> : <UserData></UserData>}

            <div className={styles['operate-wrapper']}>
                <OperateOption {...obj}></OperateOption>
                <OperateOption {...obj1}></OperateOption>
                {props.loginData !== null ? (<OutLogin />) : null}
            </div>

        </div>

    )
}
// Mine.wrappers = ['@/router/ifNotLogin'];
export default connect(state => ({ loginData: state.loginData }))(Mine);

