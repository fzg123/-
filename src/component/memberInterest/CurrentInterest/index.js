import React from 'react'
import styles from './index.less'

import i1 from '../../../assets/min-img/img/40.png'
import i2 from '../../../assets/min-img/img/39.png'
import i3 from '../../../assets/min-img/img/38.png'
import i4 from '../../../assets/min-img/img/37.png'
import i5 from '../../../assets/min-img/img/41.png'
export default function CurrentInterest(props) {
    return (
        <div className={styles['current-interest']}>
            <p className={styles['title']}>
                当前会员权益
            </p>
            <ul>
                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                    </div>
                    <div className="righht">
                        <p className={styles['msg']}>充值有礼</p>
                        <p className={styles['text']}>冲的多送的多</p>
                    </div>
                </li>

                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                    </div>
                    <div className="righht">
                        <p className={styles['msg']}>充值有礼</p>
                        <p className={styles['text']}>冲的多送的多</p>
                    </div>
                </li>
                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                    </div>
                    <div className="righht">
                        <p className={styles['msg']}>充值有礼</p>
                        <p className={styles['text']}>冲的多送的多</p>
                    </div>
                </li>
                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                    </div>
                    <div className="righht">
                        <p className={styles['msg']}>充值有礼</p>
                        <p className={styles['text']}>冲的多送的多</p>
                    </div>
                </li>
                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                    </div>
                    <div className="righht">
                        <p className={styles['msg']}>充值有礼</p>
                        <p className={styles['text']}>冲的多送的多</p>
                    </div>
                </li>
                <li>
                    <div className={styles["left"]}>
                        <img src={i1} alt="" />
                    </div>
                    <div className="righht">
                        <p className={styles['msg']}>充值有礼</p>
                        <p className={styles['text']}>冲的多送的的多送的多冲的多送的多冲的多送的多冲的多送的多冲的多送的多冲的多送的多</p>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}
