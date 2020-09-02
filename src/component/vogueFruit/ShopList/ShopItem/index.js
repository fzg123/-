import React from 'react'
import styles from './index.less'
export default function ShopItem(props) {
    return (
        <li className={styles['shop-item']}>
            <div className={styles.left}>
                <img src={props.imgSrc} alt="" />
            </div>
            <div className={styles.right}>

                <p className={styles.name}>
                    {props.name}
                </p>
                <p className={styles.type}>

                    {props.type.map((e, i) => (<span key={i}>{e}</span>))}
                </p>
                <p className={styles['price']}>
                    <span className={styles['current-price']}><span className={styles.moeeny}>￥</span>{props.price.currPrice}</span>
                    <span className={styles['prev-price']}>{props.price.prevPrice}</span>
                </p>
            </div>
            <div className={styles['go-shop']}></div>
        </li>
    )
}
