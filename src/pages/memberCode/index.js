import React from 'react'
import styles from './index.less'
import l from '../../assets/min-img/img/47.png'
import code from '../../assets/min-img/img/46.png'


import w from '../../assets/min-img/img/43.png'
import z from '../../assets/min-img/img/44.png'
import y from '../../assets/min-img/img/45.png'
import {
    UndoOutlined
} from '@ant-design/icons';
function memberCode() {
    return (
        <div className={styles['member-code']}>
            <div className={styles["content"]}>
                <img className={styles['l']} src={l} alt="" />
                <p className={styles['one']}>向收银员出示会员码付款</p>
                <img className={styles['code']} src={code} alt="" />
                <p className={styles['yhk']}>
                    <span>
                        4356
                    </span>
                    <span>6733</span>
                    <span>7649</span>
                    <span>7865</span>
                    <span>8654</span>
                </p>
                <p className={styles['shua-xin']}>
                    <UndoOutlined /> 点击刷新会员卡
                </p>
                <div className={styles['qita']}>
                    <span className={styles["line"]}></span>
                    <span> 使用其他方式付款 </span>
                    <span className={styles["line"]}></span>
                </div>
                <ul className={styles['dzfs']}>
                    <li>
                        <p><img src={w} alt=""/></p>
                        <p>
                            微信支付
                        </p>
                    </li>
                    <li>
                        <p><img src={z} alt=""/></p>
                        <p>支付宝支付</p>
                    </li>
                    <li>
                        <p><img src={y} alt=""/></p>
                        <p>银联支付</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
memberCode.wrappers = ['@/router/ShowHeader'];
memberCode.title = '会员码';
export default memberCode;
