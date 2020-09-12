import React from 'react'
import styles from './index.less'
export default function Address(props) {
    return (
        <div className={styles['address']}>
            <p>收货人： {props.addressName}</p>
            <p>电话： {props.addressPhone}</p>
            <p>收货地址： {props.addressText}</p>
            <p className={styles['msg']}>
                如果您购买的商品有任何问题，请直接与购买的门店联系! 门店将为您处理，让您售后无忧

            </p>
        </div>
    )
}
