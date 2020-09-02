import React from 'react'
import styles from './index.css'
import img from '@/assets/min-img/img/50.png'
export default function NotOrder() {
    return (
        <div className={styles['not-order']}>
            <div className={styles["center"]}>
                <img src={img} alt="" />
                <p>您还没有相关的订单</p>
                <p>可以去看看有哪些想买的</p>
            </div>
        </div>
    )
}
