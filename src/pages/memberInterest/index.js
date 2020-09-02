import React from 'react'
import MemberDisplay from '../../component/memberInterest/MemberDisplay'
import styles from './index.less'
import CurrentInterest from '../../component/memberInterest/CurrentInterest'

import img from '../../assets/min-img/img/42.png'
/**
 * 会员权益
 */
function memberInterest() {
    return (
        <div className={styles['member-interest']}>
            <div className="member-display">
                <MemberDisplay imgSrc={img} />
            </div>
            <CurrentInterest />
        </div>
    )
}
memberInterest.title = '会员权益';
memberInterest.wrappers = ['@/router/ShowHeader']

export default memberInterest;