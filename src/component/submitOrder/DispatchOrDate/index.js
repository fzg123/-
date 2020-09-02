import React from 'react'
import styles from './index.css'
export default function index() {
    return (
        <div className={styles['dispatch-data']}>
            <div className={styles['item']}>
                <div className={styles["left"]}>
                    配送方式
                </div>
                <div className={styles["right"]}>
                    鲜果配送
                </div>
            </div>
            <div className={styles['item']}>
                <div className={styles["left"]}>
                    配送日期
                </div>
                <div className={styles["right"]}>
                    2019-07-20
                </div>
            </div>
        </div>
    )
}
