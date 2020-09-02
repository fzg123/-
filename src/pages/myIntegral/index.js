import React from 'react'
import styles from './index.css'
import IntegralDetail from '../../component/myIntegral/IntegralDetail'
import img from '../../assets/min-img/img/56.png'
function myIntegral(props) {
    return (
        <div className={styles['my-integral']}>
            <div className={styles["zong-ji-fen"]}>
                <img src={img} alt=""/>
            </div>
            <IntegralDetail />
        </div>
    )
}
myIntegral.title = '我的积分';
myIntegral.wrappers = ['@/router/ShowHeader']
export default myIntegral;