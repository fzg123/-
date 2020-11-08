import React, { useEffect, useState } from 'react'
import styles from './index.css'
import enter from '../../../../assets/min-img/img/17.png'
import notEnter from '../../../../assets/min-img/img/7.png'
import Counter from '../../../common/Counter'

export default function ShopListItem(props) {

    return (
        <li className={styles['shop-list-item']} >
            <div className={styles['enter']}>
                <img
                    onClick={() => {
                        props.onChange({
                            id: props.shoppingId,
                            status: props.isEnter ? 0 : 1,
                            index: props.index
                        })

                    }}
                    src={props.isEnter ? enter : notEnter}
                    alt=""
                />
            </div>
            <div className={styles['img']}>
                <img src={props.imgSrc} alt="" onClick={() => props.onClick && props.onClick(props.id)} />
            </div>
            <div className={styles['price-msg']}>

                <p className={styles['name']}>
                    {props.name}
                </p>
                <p className={styles['msg']}>
                    {props.msg}
                </p>


                <p className={styles['price']}>
                    <span className={styles['current-price']}>
                        <span className={styles['money']}>￥</span>{props.price.currentPrice}
                    </span>
                    <span className={styles['prev-price']}>
                        <span className={styles['money']}>￥</span>{props.price.prevPrice}
                    </span>
                </p>

            </div>
            <div className={styles['shop-num']}>
                <Counter
                    num={props.shopNum}
                    onChange={(newCount) => {

                        props.onChange({
                            id: props.shoppingId,
                            count: newCount,
                            index: props.index
                        })
                    }}

                ></Counter>
            </div>
        </li>
    )
}
