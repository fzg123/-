import React from 'react'
import styles from './index.less'
import img from '../../assets/min-img/img/58.png'
import MainDisplay from '../../component/recharge/MainDisplay'
function recharge() {
    return (
        <div className={styles['recharge']}>
            <MainDisplay />
            <div className={styles["msg1"]}>
                <p className={styles['title']}>充值即送好礼</p>
                <p>储值1100.0元，即赠送5元;</p>

            </div>
            <div className={styles["msg2"]}>
                <p className={styles['title']}>
                    <img src={img} alt="" /> 温馨提示
                </p>
                <p>
                    <img src={img} alt="" /> 余额不可提现
                </p>
                <p>
                    <img src={img} alt="" /> 可到线下门店消费抵扣
                </p>
                <p>
                    <img src={img} alt="" /> 如有疑问请致电400-83-38676
                </p>
                <p>
                    <img src={img} alt="" /> 新用户充值后需设置储值卡支付密码
                </p>
            </div>
            <div className={styles["enter-recharge"]}>
                <p>确认充值 ￥100.0</p>
            </div>
        </div>
    )
}
recharge.wrappers = ['@/router/IfNotLogin','@/router/ShowHeader'];
recharge.title = '充值';
export default recharge;