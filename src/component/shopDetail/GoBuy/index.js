import React from 'react'
import styles from './index.css'
import goShopCar from '@/assets/min-img/img/16.png'
import Link from '../../common/Link'
export default function GoBuy(props) {
    return (<div className={styles['go-buy']}>
        <div className={styles["left"]}>
            <Link to='/shoppingCart'>
                <img src={goShopCar} alt="" />
                {props.shopNum !== null ? <i>{props.shopNum}</i> : null}
            </Link>

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
