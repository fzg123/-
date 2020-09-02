import React from 'react'
import styles from './index.css'
export default function ShopListItem(props) {
    /**
     *  {
            imgSrc: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',
            name: '[积分兑]红心火龙果+凤梨双拼的商品',
            msg: '甜度爆表, 解暑必备',
            suoXuJiFen: 1200,
            prevPrice: 18
        },
     * 
     * 
     */
    return (
        <li className={styles['shop-list-item']}>
            <div className={styles["left"]}>
                <img src={props.imgSrc} alt="" />

            </div>
            <div className={styles["right"]}>
                <div className={styles["top"]}>
                    <p>{props.name}</p>
                    <p>{props.msg}</p>
                </div>
                <div className={styles['bottom']}>
                    <div className={styles['price']}>
                        <span>{props.suoXuJiFen}积分</span>
                        <span>￥{props.prevPrice}</span>
                    </div>
                    <div className={styles['btn']}>
                        积分不足
                    </div>
                </div>
            </div>
        </li>
    )
}
