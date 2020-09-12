import React from 'react'
import styles from './index.less'

export default function DaoJiShi(time) {
    return (
        <div className={styles['countdown']}>
            <div className={styles["time"]}>
                <span>
                    {(time.s + '').length === 1 ? '0' + time.s : time.s}
                </span>
            </div>
            <span style={{ lineHeight: '30px' }}>:</span>
            <div className={styles["time"]}>
                <span>
                    {(time.f + '').length === 1 ? '0' + time.f : time.f}
                </span>
            </div>
            <span style={{ lineHeight: '30px' }}>:</span>
            <div className={styles["time"]}>
                <span>
                    {(time.m + '').length === 1 ? '0' + time.m : time.m}
                </span>
            </div>
        </div>
    )
}
