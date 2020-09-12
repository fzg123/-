import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.less'
Interrelated.propTypes = {
    count: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.number,
    time: PropTypes.string
}
export default function Interrelated(props) {
    return (
        <div className={styles['interrelated']}>
            <div className={styles['top']}>
                <div className={styles['left']}>
                    共计{props.count}件商品
                </div>
                <div className={styles['right']}>
                    实付金额: <span className={styles['price']}>￥{props.price}</span>
                </div>
            </div>
            <div className={styles['bottom']}>
                <p>订单编号: {props.id}</p>
                <p>下单时间: {props.time}</p>
            </div>
        </div>
    )
}
