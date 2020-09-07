import React from 'react'
import styles from './index.css'
import enter from '@/assets/min-img/img/17.png'
import notEnter from '@/assets/min-img/img/7.png'
import { Link } from 'umi'

export default function Footer(props) {

    return (
        <div className={styles['footer']}>
            <div className={styles['msg']}>
                <div className={styles['left']}>
                    <img onClick={() => {
                        props.onAllChecked && props.onAllChecked();
                    }} src={props.isAllEnter ? enter : notEnter} alt="" />
                    <span>全选</span>
                </div>
                <div className={styles.right}>
                    <p>
                        <span className={styles['text']}>
                            合计: <span className={styles['price']}>￥{props.allPrice}</span>
                        </span>

                    </p>
                    <p className={styles['youhui']}>
                        已优惠: ￥{props.boon}(不含运费)
                    </p>
                </div>
            </div>
            <div onClick={() => {
                props.onPayTheBill && props.onPayTheBill();
            }} className={styles['go-shopping']}>
                去结算
            </div>
        </div>
    )
}
