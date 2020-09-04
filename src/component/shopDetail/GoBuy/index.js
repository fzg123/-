import React from 'react'
import styles from './index.css'
import goShopCar from '@/assets/min-img/img/16.png'
export default function GoBuy(props) {
    return (<div className={styles['go-buy']}>
        <div className={styles["left"]}>
            <img src={goShopCar} alt="" />
            <i>{props.shopNum}</i>
        </div>
        <div className={styles["right"]}>
            <div
                onClick={() => {
                    props.onGoShopCar();
                    
                }}
                className={styles['button'] + ' ' + styles["go-shop-car"]}
            >加入购物车</div>
            <div

                onClick={() => {

                    props.onGoBuy();
                }}
                className={styles['button'] + ' ' + styles["go-shop-buy"]}
            >立即抢购</div>
        </div>
    </div>)
}
