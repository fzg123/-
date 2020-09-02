import React from 'react'
import styles from './index.css'
import Bottom from './Bottom'
import Top from './Top'
UserData.defaultProps = {
    userHeadSculptureSrc: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
    userName: '兔宝宝',
    grade: "普通会员",
    balance: 0,// 余额
    integral: 0,// 积分
    preferentialVolume: 0// 优惠卷
}
export default function UserData(props) {

    return (
        <div className={styles['user-data']}>
            <Top {...props}></Top>
            <Bottom {...props}></Bottom>
        </div>
    )
}
