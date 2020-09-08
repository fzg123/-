import React from 'react'
import styles from './index.css'
export default function ShopListItem(props) {
    return (
        <div className={styles['shop-list-item']}>
            <div className={styles["shop-data"]}>
                <img src={props.imgSrc} alt="" />
                <p className={styles['shop']}>
                    <span>{props.name}</span>
                    <span>{props.msg}</span>
                </p>
            </div>
            <div className={styles['num']}>
                <span className={styles['fh']}>
                    X
                </span>
                <span>
                    {props.num}
                </span>
            </div>
            <div className={styles['price']}>
                <span className={styles['moneyFh']}>
                    ￥
                </span>
                <span>
                    {props.price}
                </span>
            </div>

        </div>
    )
}
