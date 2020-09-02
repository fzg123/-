import React from 'react'
import styles from './index.css'
import q from '../../../assets/min-img/img/qg.png'
import porpTypes from 'prop-types'
import Countdown from '../../common/Countdown'
/**
 * 抢购倒计时模块
 */
PriceAndCountdown.porpTypes = {
    currentPrice: porpTypes.number.isRequired,
    prevPrice: porpTypes.number.isRequired,
    time: {
        s: porpTypes.number.isRequired,
        f: porpTypes.number.isRequired,
        m: porpTypes.number.isRequired,
    }
}
export default function PriceAndCountdown(props) {
    return (
        <div className={styles['wrapper']}>
            <div className={styles["left"]}>
                <div className={styles["top"]}>
                    <img src={q} alt="" />

                    <div className={styles['qg-msg']}>限时抢购</div>
                </div>
                <div className={styles["bottom"]}>
                    <span className={styles['current-price']}>
                        <span className={styles['fuhao']}>￥</span>{props.currentPrice}
                    </span>
                    <span className={styles['prev-price']}>
                        <span className={styles['fuhao']}>￥</span>{props.prevPrice}
                    </span>
                </div>
            </div>
            <div className={styles["right"]}>
                <p>抢购倒计时</p>
                <Countdown
                    time={
                        {
                            s: 1,
                            f: 1,
                            m: 3
                        }
                    }
                    timeEnd={() => {
                        console.log('时间到了');
                    }}
                ></Countdown>
        </div>
        </div>
    )
}
