import React from 'react'
import styles from './index.css'
export default function ShopListItem() {
    return (
        <li className={styles.item}>
            <img src="https://dummyimage.com/1038x298/50B347/FFF&text=Mock.js" alt="" />

            <div className={styles.msg}>
                <p>
                    巨峰葡萄采购-2000g
            </p>
                <p>
                    入院时间：7月三日到8月25日(超重补差价)

            </p>
                <div className={styles.left}>
                    <p>
                        距结束: 18天
                    </p>
                    <p>
                        ￥23.4
                    </p>
                </div>
                <div className={styles.right}>
                    去抢购
                </div>
            </div>
        </li>
    )
}
