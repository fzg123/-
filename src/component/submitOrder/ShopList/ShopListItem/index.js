import React from 'react'
import styles from './index.css'
export default function ShopListItem(props) {

    /**
     *  {
                    imgSrc: 'https://dummyimage.com/216x200/50B347/FFF&text=Mock.js',

                    name: '阳光冬枣1份-不',
                    msg: '冬日假期刚刚结束我还有点糊涂',
                    num: 1,
                    price: 8.8
                },
     */
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
