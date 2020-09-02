import React from 'react'
import styles from './index.less'
import Detail from '../../component/myRedPacket/Detail'
import img from '../../assets/min-img/img/62.png'
function myRedPacket(props) {
    return (
        <div className={styles['my-red-packet']}>
            <div className={styles['red-packet']}>
                <img src={img} alt="" />
            </div>
            <Detail/>
        </div>
    )
}
myRedPacket.wrappers = ['@/router/ShowHeader','@/router/IfNotLogin'];
myRedPacket.title = '我的红包';
export default myRedPacket;