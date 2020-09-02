import React from 'react'
import styles from './index.less'
import SelectPayType from './SelectPayType'
export default function EnterPay(props) {
    return (
        <div className={styles['enter-pay']}>
            <p>
                选择支付方式
            </p>
            <p>
                待支付
            </p>
            <p>
                ￥ {props.price}
            </p>
            <SelectPayType balance={props.balance} />

            <div className={styles['pay']}>
                支付
            </div>
        </div>
    )
}
