import React from 'react'
import styles from './index.less'
export default function OrderListItem(props) {
    return (
        <li className={styles['order-list-item']}>
            <div className={styles["top"]}>
                <div className={styles["left"]}>
                    订单编号: {props.orderNumber}
                </div>
                <div className={styles["right"]}>
                    {props.text}
                </div>
            </div>
            <div className={styles["bottom"]}>
                <img src={props.shopImgSrc} alt=""/>
                <p>
                    实付: ￥<span className={styles['price']}>{props.price}</span> (含运费: ￥0)
                </p>
            </div>
        </li>
    )
}
